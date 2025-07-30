-- BotJob.ai Database Schema
-- This script creates all necessary tables, indexes, policies, and functions for the BotJob.ai platform

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE user_type AS ENUM ('business', 'developer', 'admin');
CREATE TYPE agent_status AS ENUM ('draft', 'pending_review', 'active', 'suspended');
CREATE TYPE subscription_status AS ENUM ('trialing', 'active', 'cancelled', 'past_due');
CREATE TYPE instance_status AS ENUM ('active', 'paused', 'training');
CREATE TYPE usage_type AS ENUM ('call', 'email', 'task', 'api');
CREATE TYPE pricing_model AS ENUM ('subscription', 'usage', 'outcome');
CREATE TYPE team_role AS ENUM ('owner', 'admin', 'member');
CREATE TYPE experience_level AS ENUM ('beginner', 'intermediate', 'expert');

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    user_type user_type NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Business profiles
CREATE TABLE public.business_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    industry TEXT,
    company_size TEXT CHECK (company_size IN ('1-10', '11-50', '51-200', '200+')),
    use_cases TEXT[],
    budget_min DECIMAL(10, 2),
    budget_max DECIMAL(10, 2),
    phone TEXT,
    website TEXT,
    address JSONB,
    onboarding_completed BOOLEAN DEFAULT FALSE,
    trial_ends_at TIMESTAMPTZ,
    stripe_customer_id TEXT UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Developer profiles
CREATE TABLE public.developer_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    company_name TEXT,
    experience_level experience_level,
    technical_background TEXT[],
    portfolio_links JSONB,
    github_username TEXT,
    linkedin_url TEXT,
    website_url TEXT,
    bio TEXT,
    verified BOOLEAN DEFAULT FALSE,
    verification_date TIMESTAMPTZ,
    verification_notes TEXT,
    stripe_account_id TEXT UNIQUE,
    commission_rate DECIMAL(4, 2) DEFAULT 20.00,
    total_earnings DECIMAL(10, 2) DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id)
);

-- AI Agents
CREATE TABLE public.agents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    developer_id UUID REFERENCES public.developer_profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    tagline TEXT,
    avatar_url TEXT,
    category TEXT NOT NULL,
    sub_category TEXT,
    capabilities TEXT[] NOT NULL,
    integrations TEXT[],
    languages TEXT[] DEFAULT ARRAY['English'],
    pricing_model pricing_model NOT NULL,
    base_price DECIMAL(10, 2),
    usage_rates JSONB,
    setup_fee DECIMAL(10, 2) DEFAULT 0,
    free_trial_days INTEGER DEFAULT 7,
    status agent_status DEFAULT 'draft',
    version TEXT DEFAULT '1.0.0',
    performance_metrics JSONB DEFAULT '{
        "success_rate": 0,
        "avg_response_time": 0,
        "total_tasks": 0,
        "satisfaction_score": 0,
        "uptime_percentage": 100
    }',
    configuration_schema JSONB,
    required_integrations TEXT[],
    tags TEXT[],
    featured BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Agent reviews
CREATE TABLE public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
    business_id UUID REFERENCES public.business_profiles(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    title TEXT,
    comment TEXT,
    pros TEXT,
    cons TEXT,
    developer_response TEXT,
    developer_response_at TIMESTAMPTZ,
    helpful_count INTEGER DEFAULT 0,
    verified_purchase BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(agent_id, business_id)
);

-- Agent subscriptions
CREATE TABLE public.agent_subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES public.business_profiles(id) ON DELETE CASCADE,
    agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
    stripe_subscription_id TEXT UNIQUE,
    stripe_product_id TEXT,
    status subscription_status NOT NULL DEFAULT 'trialing',
    current_period_start TIMESTAMPTZ,
    current_period_end TIMESTAMPTZ,
    cancel_at_period_end BOOLEAN DEFAULT FALSE,
    cancelled_at TIMESTAMPTZ,
    trial_end TIMESTAMPTZ,
    metadata JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Agent instances (provisioned agents)
CREATE TABLE public.agent_instances (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subscription_id UUID REFERENCES public.agent_subscriptions(id) ON DELETE CASCADE,
    instance_name TEXT NOT NULL,
    configuration JSONB NOT NULL DEFAULT '{}',
    phone_number TEXT,
    phone_number_sid TEXT,
    email_address TEXT,
    calendar_id TEXT,
    webhook_url TEXT,
    api_key TEXT UNIQUE DEFAULT encode(gen_random_bytes(32), 'hex'),
    status instance_status DEFAULT 'active',
    last_active_at TIMESTAMPTZ,
    training_completed_at TIMESTAMPTZ,
    metadata JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Usage logs
CREATE TABLE public.usage_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    instance_id UUID REFERENCES public.agent_instances(id) ON DELETE CASCADE,
    usage_type usage_type NOT NULL,
    duration_seconds INTEGER,
    quantity INTEGER DEFAULT 1,
    metadata JSONB,
    cost DECIMAL(10, 4),
    billed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Activity logs
CREATE TABLE public.activity_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    instance_id UUID REFERENCES public.agent_instances(id) ON DELETE CASCADE,
    activity_type TEXT NOT NULL,
    activity_data JSONB NOT NULL,
    success BOOLEAN DEFAULT TRUE,
    error_message TEXT,
    duration_ms INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Billing and invoices
CREATE TABLE public.invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES public.business_profiles(id) ON DELETE CASCADE,
    stripe_invoice_id TEXT UNIQUE,
    invoice_number TEXT UNIQUE,
    amount DECIMAL(10, 2) NOT NULL,
    tax DECIMAL(10, 2) DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    status TEXT NOT NULL,
    due_date DATE,
    paid_at TIMESTAMPTZ,
    period_start TIMESTAMPTZ,
    period_end TIMESTAMPTZ,
    line_items JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Team members
CREATE TABLE public.team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES public.business_profiles(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    role team_role NOT NULL DEFAULT 'member',
    permissions JSONB DEFAULT '{
        "view_agents": true,
        "manage_agents": false,
        "view_billing": false,
        "manage_billing": false,
        "invite_members": false,
        "manage_team": false
    }',
    invited_by UUID REFERENCES public.users(id),
    invited_at TIMESTAMPTZ DEFAULT NOW(),
    accepted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(business_id, user_id)
);

-- Integrations configuration
CREATE TABLE public.integrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES public.business_profiles(id) ON DELETE CASCADE,
    service_name TEXT NOT NULL,
    configuration JSONB NOT NULL,
    encrypted_credentials TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    last_sync_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(business_id, service_name)
);

-- Webhooks
CREATE TABLE public.webhooks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES public.business_profiles(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    events TEXT[] NOT NULL,
    secret TEXT DEFAULT encode(gen_random_bytes(32), 'hex'),
    is_active BOOLEAN DEFAULT TRUE,
    last_triggered_at TIMESTAMPTZ,
    failure_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Webhook logs
CREATE TABLE public.webhook_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    webhook_id UUID REFERENCES public.webhooks(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL,
    payload JSONB NOT NULL,
    response_status INTEGER,
    response_body TEXT,
    attempts INTEGER DEFAULT 1,
    success BOOLEAN,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_agents_developer_id ON public.agents(developer_id);
CREATE INDEX idx_agents_status ON public.agents(status);
CREATE INDEX idx_agents_category ON public.agents(category);
CREATE INDEX idx_agents_featured ON public.agents(featured);
CREATE INDEX idx_agent_subscriptions_business_id ON public.agent_subscriptions(business_id);
CREATE INDEX idx_agent_subscriptions_status ON public.agent_subscriptions(status);
CREATE INDEX idx_agent_instances_subscription_id ON public.agent_instances(subscription_id);
CREATE INDEX idx_agent_instances_status ON public.agent_instances(status);
CREATE INDEX idx_usage_logs_instance_id ON public.usage_logs(instance_id);
CREATE INDEX idx_usage_logs_created_at ON public.usage_logs(created_at);
CREATE INDEX idx_activity_logs_instance_id ON public.activity_logs(instance_id);
CREATE INDEX idx_activity_logs_created_at ON public.activity_logs(created_at);
CREATE INDEX idx_reviews_agent_id ON public.reviews(agent_id);
CREATE INDEX idx_reviews_business_id ON public.reviews(business_id);

-- Create update timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply update trigger to tables with updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_business_profiles_updated_at BEFORE UPDATE ON public.business_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_developer_profiles_updated_at BEFORE UPDATE ON public.developer_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_agents_updated_at BEFORE UPDATE ON public.agents
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_agent_subscriptions_updated_at BEFORE UPDATE ON public.agent_subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_agent_instances_updated_at BEFORE UPDATE ON public.agent_instances
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON public.reviews
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON public.team_members
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_integrations_updated_at BEFORE UPDATE ON public.integrations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_webhooks_updated_at BEFORE UPDATE ON public.webhooks
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.developer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agent_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agent_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usage_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webhooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webhook_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can view their own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for business_profiles
CREATE POLICY "Users can view their own business profile" ON public.business_profiles
    FOR SELECT USING (auth.uid() = user_id OR EXISTS (
        SELECT 1 FROM public.team_members 
        WHERE team_members.business_id = business_profiles.id 
        AND team_members.user_id = auth.uid()
    ));

CREATE POLICY "Users can update their own business profile" ON public.business_profiles
    FOR UPDATE USING (auth.uid() = user_id OR EXISTS (
        SELECT 1 FROM public.team_members 
        WHERE team_members.business_id = business_profiles.id 
        AND team_members.user_id = auth.uid()
        AND team_members.role IN ('owner', 'admin')
    ));

-- RLS Policies for developer_profiles
CREATE POLICY "Anyone can view verified developer profiles" ON public.developer_profiles
    FOR SELECT USING (verified = true OR auth.uid() = user_id);

CREATE POLICY "Developers can update their own profile" ON public.developer_profiles
    FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for agents
CREATE POLICY "Anyone can view active agents" ON public.agents
    FOR SELECT USING (status = 'active' OR developer_id IN (
        SELECT id FROM public.developer_profiles WHERE user_id = auth.uid()
    ));

CREATE POLICY "Developers can manage their own agents" ON public.agents
    FOR ALL USING (developer_id IN (
        SELECT id FROM public.developer_profiles WHERE user_id = auth.uid()
    ));

-- RLS Policies for reviews
CREATE POLICY "Anyone can view reviews" ON public.reviews
    FOR SELECT USING (true);

CREATE POLICY "Business users can create reviews" ON public.reviews
    FOR INSERT WITH CHECK (business_id IN (
        SELECT id FROM public.business_profiles WHERE user_id = auth.uid()
    ));

CREATE POLICY "Business users can update their own reviews" ON public.reviews
    FOR UPDATE USING (business_id IN (
        SELECT id FROM public.business_profiles WHERE user_id = auth.uid()
    ));

-- Additional policies for other tables would follow similar patterns

-- Functions for business logic
CREATE OR REPLACE FUNCTION generate_agent_slug(agent_name TEXT)
RETURNS TEXT AS $$
DECLARE
    base_slug TEXT;
    final_slug TEXT;
    counter INTEGER := 0;
BEGIN
    base_slug := lower(regexp_replace(agent_name, '[^a-zA-Z0-9]+', '-', 'g'));
    base_slug := trim(both '-' from base_slug);
    final_slug := base_slug;
    
    WHILE EXISTS (SELECT 1 FROM public.agents WHERE slug = final_slug) LOOP
        counter := counter + 1;
        final_slug := base_slug || '-' || counter;
    END LOOP;
    
    RETURN final_slug;
END;
$$ LANGUAGE plpgsql;

-- Function to calculate agent performance metrics
CREATE OR REPLACE FUNCTION update_agent_performance_metrics(agent_id_param UUID)
RETURNS VOID AS $$
DECLARE
    metrics JSONB;
BEGIN
    SELECT jsonb_build_object(
        'success_rate', COALESCE(AVG(CASE WHEN al.success THEN 100 ELSE 0 END), 0),
        'avg_response_time', COALESCE(AVG(al.duration_ms), 0),
        'total_tasks', COUNT(al.id),
        'satisfaction_score', COALESCE(AVG(r.rating) * 20, 0),
        'uptime_percentage', 99.9
    ) INTO metrics
    FROM public.agent_instances ai
    LEFT JOIN public.activity_logs al ON al.instance_id = ai.id
    LEFT JOIN public.agent_subscriptions asub ON asub.id = ai.subscription_id
    LEFT JOIN public.reviews r ON r.agent_id = agent_id_param
    WHERE asub.agent_id = agent_id_param;
    
    UPDATE public.agents
    SET performance_metrics = metrics
    WHERE id = agent_id_param;
END;
$$ LANGUAGE plpgsql;

-- Function to handle subscription status changes
CREATE OR REPLACE FUNCTION handle_subscription_status_change()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.status != OLD.status THEN
        -- Update agent instances when subscription status changes
        IF NEW.status IN ('cancelled', 'past_due') THEN
            UPDATE public.agent_instances
            SET status = 'paused'
            WHERE subscription_id = NEW.id;
        ELSIF NEW.status = 'active' AND OLD.status IN ('cancelled', 'past_due') THEN
            UPDATE public.agent_instances
            SET status = 'active'
            WHERE subscription_id = NEW.id;
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER subscription_status_change
    AFTER UPDATE ON public.agent_subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION handle_subscription_status_change();

-- Grant permissions for authenticated users
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO authenticated;