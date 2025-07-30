-- BotJob.ai Dummy Data for Testing
-- This script populates the database with realistic test data

-- Insert test users (Note: These would normally be created through Supabase Auth)
-- For testing, we'll create users with dummy auth IDs

-- Test Business Users
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at)
VALUES
    ('11111111-1111-1111-1111-111111111111', 'john@techstartup.com', crypt('password123', gen_salt('bf')), NOW(), NOW(), NOW()),
    ('22222222-2222-2222-2222-222222222222', 'sarah@medclinic.com', crypt('password123', gen_salt('bf')), NOW(), NOW(), NOW()),
    ('33333333-3333-3333-3333-333333333333', 'mike@lawfirm.com', crypt('password123', gen_salt('bf')), NOW(), NOW(), NOW());

-- Test Developer Users
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at)
VALUES
    ('44444444-4444-4444-4444-444444444444', 'alex@aidev.com', crypt('password123', gen_salt('bf')), NOW(), NOW(), NOW()),
    ('55555555-5555-5555-5555-555555555555', 'emma@botbuilder.com', crypt('password123', gen_salt('bf')), NOW(), NOW(), NOW()),
    ('66666666-6666-6666-6666-666666666666', 'david@agentforge.com', crypt('password123', gen_salt('bf')), NOW(), NOW(), NOW());

-- Insert users into our users table
INSERT INTO public.users (id, email, user_type) VALUES
    ('11111111-1111-1111-1111-111111111111', 'john@techstartup.com', 'business'),
    ('22222222-2222-2222-2222-222222222222', 'sarah@medclinic.com', 'business'),
    ('33333333-3333-3333-3333-333333333333', 'mike@lawfirm.com', 'business'),
    ('44444444-4444-4444-4444-444444444444', 'alex@aidev.com', 'developer'),
    ('55555555-5555-5555-5555-555555555555', 'emma@botbuilder.com', 'developer'),
    ('66666666-6666-6666-6666-666666666666', 'david@agentforge.com', 'developer');

-- Insert business profiles
INSERT INTO public.business_profiles (user_id, company_name, industry, company_size, use_cases, budget_min, budget_max, phone, website, onboarding_completed, trial_ends_at, stripe_customer_id) VALUES
    ('11111111-1111-1111-1111-111111111111', 'TechStartup Inc', 'Technology', '11-50', ARRAY['Customer Service', 'Lead Generation'], 500.00, 2000.00, '+1-555-0101', 'https://techstartup.com', true, NOW() + INTERVAL '14 days', 'cus_test1'),
    ('22222222-2222-2222-2222-222222222222', 'MedClinic Healthcare', 'Healthcare', '51-200', ARRAY['Appointment Scheduling', 'Patient Support'], 1000.00, 5000.00, '+1-555-0102', 'https://medclinic.com', true, NOW() + INTERVAL '7 days', 'cus_test2'),
    ('33333333-3333-3333-3333-333333333333', 'LawFirm & Associates', 'Legal', '1-10', ARRAY['Client Intake', 'Document Processing'], 300.00, 1500.00, '+1-555-0103', 'https://lawfirm.com', false, NOW() + INTERVAL '21 days', 'cus_test3');

-- Insert developer profiles
INSERT INTO public.developer_profiles (user_id, name, company_name, experience_level, technical_background, portfolio_links, github_username, bio, verified, verification_date, stripe_account_id, commission_rate, total_earnings) VALUES
    ('44444444-4444-4444-4444-444444444444', 'Alex Rodriguez', 'AI Solutions LLC', 'expert', ARRAY['AI/ML', 'Python', 'APIs'], '{"website": "https://alexdev.com", "linkedin": "https://linkedin.com/in/alexdev"}', 'alexdev', 'Experienced AI developer specializing in conversational agents and automation', true, NOW() - INTERVAL '30 days', 'acct_test1', 20.00, 15000.00),
    ('55555555-5555-5555-5555-555555555555', 'Emma Watson', 'BotBuilder Co', 'intermediate', ARRAY['Web Development', 'Node.js', 'React'], '{"website": "https://emmabots.com", "portfolio": "https://portfolio.emmabots.com"}', 'emmabots', 'Full-stack developer focused on building intelligent business automation tools', true, NOW() - INTERVAL '15 days', 'acct_test2', 20.00, 8500.00),
    ('66666666-6666-6666-6666-666666666666', 'David Chen', 'AgentForge', 'expert', ARRAY['AI/ML', 'LangChain', 'OpenAI'], '{"website": "https://agentforge.ai", "github": "https://github.com/davidchen"}', 'davidchen', 'AI researcher and developer with expertise in multi-agent systems and LLM integration', true, NOW() - INTERVAL '45 days', 'acct_test3', 15.00, 25000.00);

-- Insert agents
INSERT INTO public.agents (developer_id, name, slug, description, tagline, category, sub_category, capabilities, integrations, languages, pricing_model, base_price, usage_rates, setup_fee, status, performance_metrics, tags, featured, published_at) VALUES
    (
        (SELECT id FROM public.developer_profiles WHERE user_id = '44444444-4444-4444-4444-444444444444'),
        'CustomerCare Pro',
        'customercare-pro',
        'Advanced customer service agent that handles inquiries, complaints, and support tickets with human-like empathy and efficiency.',
        'Turn customer service into customer success',
        'Customer Service',
        'Support',
        ARRAY['Phone Support', 'Email Support', 'Live Chat', 'Ticket Management', 'Knowledge Base'],
        ARRAY['Twilio', 'SendGrid', 'Zendesk', 'Slack'],
        ARRAY['English', 'Spanish', 'French'],
        'subscription',
        149.00,
        '{"call_minute": 0.10, "email": 0.05, "chat_message": 0.02}',
        50.00,
        'active',
        '{"success_rate": 94.7, "avg_response_time": 180, "total_tasks": 1247, "satisfaction_score": 92.0, "uptime_percentage": 99.8}',
        ARRAY['customer-service', 'support', 'multilingual', 'high-volume'],
        true,
        NOW() - INTERVAL '30 days'
    ),
    (
        (SELECT id FROM public.developer_profiles WHERE user_id = '55555555-5555-5555-5555-555555555555'),
        'LeadGen Assistant',
        'leadgen-assistant',
        'Intelligent lead generation and qualification agent that identifies prospects, initiates contact, and nurtures relationships.',
        'Transform cold leads into warm opportunities',
        'Sales',
        'Lead Generation',
        ARRAY['Cold Calling', 'Email Outreach', 'Lead Scoring', 'CRM Integration', 'Follow-up Automation'],
        ARRAY['Salesforce', 'HubSpot', 'Twilio', 'LinkedIn API'],
        ARRAY['English'],
        'outcome',
        0.00,
        '{"qualified_lead": 15.00, "appointment_set": 25.00, "demo_completed": 40.00}',
        0.00,
        'active',
        '{"success_rate": 87.3, "avg_response_time": 240, "total_tasks": 892, "satisfaction_score": 88.5, "uptime_percentage": 99.5}',
        ARRAY['sales', 'lead-generation', 'crm', 'outreach'],
        true,
        NOW() - INTERVAL '25 days'
    ),
    (
        (SELECT id FROM public.developer_profiles WHERE user_id = '66666666-6666-6666-6666-666666666666'),
        'ScheduleMaster',
        'schedulemaster',
        'Advanced scheduling agent that manages calendars, books appointments, and coordinates meetings across time zones.',
        'Never miss a meeting again',
        'Administrative',
        'Scheduling',
        ARRAY['Calendar Management', 'Appointment Booking', 'Meeting Coordination', 'Reminder Notifications', 'Timezone Handling'],
        ARRAY['Google Calendar', 'Outlook', 'Calendly', 'Zoom', 'Teams'],
        ARRAY['English', 'Spanish'],
        'subscription',
        79.00,
        '{"appointment_booked": 2.00, "meeting_coordinated": 5.00}',
        0.00,
        'active',
        '{"success_rate": 98.2, "avg_response_time": 120, "total_tasks": 2341, "satisfaction_score": 95.8, "uptime_percentage": 99.9}',
        ARRAY['scheduling', 'calendar', 'meetings', 'productivity'],
        false,
        NOW() - INTERVAL '20 days'
    ),
    (
        (SELECT id FROM public.developer_profiles WHERE user_id = '44444444-4444-4444-4444-444444444444'),
        'DocuBot Legal',
        'docubot-legal',
        'Specialized legal document processing agent for contract review, compliance checking, and legal research.',
        'Streamline your legal workflows',
        'Legal',
        'Document Processing',
        ARRAY['Contract Review', 'Compliance Checking', 'Legal Research', 'Document Generation', 'Case Management'],
        ARRAY['DocuSign', 'LexisNexis', 'Westlaw', 'Google Drive'],
        ARRAY['English'],
        'usage',
        0.00,
        '{"document_processed": 10.00, "contract_reviewed": 25.00, "research_query": 5.00}',
        100.00,
        'active',
        '{"success_rate": 91.5, "avg_response_time": 300, "total_tasks": 456, "satisfaction_score": 89.2, "uptime_percentage": 99.7}',
        ARRAY['legal', 'documents', 'contracts', 'compliance'],
        false,
        NOW() - INTERVAL '15 days'
    ),
    (
        (SELECT id FROM public.developer_profiles WHERE user_id = '55555555-5555-5555-5555-555555555555'),
        'HealthDesk Assistant',
        'healthdesk-assistant',
        'HIPAA-compliant healthcare assistant for patient communication, appointment scheduling, and medical inquiries.',
        'Healthcare support that cares',
        'Healthcare',
        'Patient Support',
        ARRAY['Appointment Scheduling', 'Patient Communication', 'Insurance Verification', 'Prescription Reminders', 'Symptom Triage'],
        ARRAY['Epic', 'Cerner', 'Twilio', 'SendGrid', 'Zoom'],
        ARRAY['English', 'Spanish'],
        'subscription',
        199.00,
        '{"appointment_scheduled": 3.00, "patient_interaction": 1.50}',
        75.00,
        'active',
        '{"success_rate": 96.1, "avg_response_time": 150, "total_tasks": 1893, "satisfaction_score": 94.3, "uptime_percentage": 99.6}',
        ARRAY['healthcare', 'hipaa', 'patients', 'appointments'],
        true,
        NOW() - INTERVAL '10 days'
    );

-- Insert agent subscriptions
INSERT INTO public.agent_subscriptions (business_id, agent_id, stripe_subscription_id, status, current_period_start, current_period_end, trial_end) VALUES
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '11111111-1111-1111-1111-111111111111'),
        (SELECT id FROM public.agents WHERE slug = 'customercare-pro'),
        'sub_test1',
        'active',
        NOW() - INTERVAL '15 days',
        NOW() + INTERVAL '15 days',
        NOW() - INTERVAL '8 days'
    ),
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '11111111-1111-1111-1111-111111111111'),
        (SELECT id FROM public.agents WHERE slug = 'leadgen-assistant'),
        'sub_test2',
        'trialing',
        NOW() - INTERVAL '3 days',
        NOW() + INTERVAL '27 days',
        NOW() + INTERVAL '4 days'
    ),
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '22222222-2222-2222-2222-222222222222'),
        (SELECT id FROM public.agents WHERE slug = 'healthdesk-assistant'),
        'sub_test3',
        'active',
        NOW() - INTERVAL '20 days',
        NOW() + INTERVAL '10 days',
        NOW() - INTERVAL '13 days'
    ),
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '22222222-2222-2222-2222-222222222222'),
        (SELECT id FROM public.agents WHERE slug = 'schedulemaster'),
        'sub_test4',
        'active',
        NOW() - INTERVAL '25 days',
        NOW() + INTERVAL '5 days',
        NOW() - INTERVAL '18 days'
    );

-- Insert agent instances
INSERT INTO public.agent_instances (subscription_id, instance_name, configuration, phone_number, email_address, status, last_active_at) VALUES
    (
        (SELECT id FROM public.agent_subscriptions WHERE stripe_subscription_id = 'sub_test1'),
        'TechStartup Support Agent',
        '{"business_hours": "9:00-18:00", "timezone": "America/New_York", "escalation_keywords": ["urgent", "complaint", "manager"], "personality": "professional", "response_speed": "fast"}',
        '+1-555-7001',
        'support@techstartup.com',
        'active',
        NOW() - INTERVAL '2 hours'
    ),
    (
        (SELECT id FROM public.agent_subscriptions WHERE stripe_subscription_id = 'sub_test2'),
        'TechStartup Sales Agent',
        '{"business_hours": "8:00-20:00", "timezone": "America/New_York", "target_industries": ["SaaS", "Technology"], "lead_score_threshold": 7}',
        '+1-555-7002',
        'sales@techstartup.com',
        'active',
        NOW() - INTERVAL '1 hour'
    ),
    (
        (SELECT id FROM public.agent_subscriptions WHERE stripe_subscription_id = 'sub_test3'),
        'MedClinic Patient Assistant',
        '{"business_hours": "7:00-19:00", "timezone": "America/New_York", "hipaa_mode": true, "appointment_types": ["consultation", "follow-up", "urgent"], "languages": ["en", "es"]}',
        '+1-555-7003',
        'patients@medclinic.com',
        'active',
        NOW() - INTERVAL '30 minutes'
    ),
    (
        (SELECT id FROM public.agent_subscriptions WHERE stripe_subscription_id = 'sub_test4'),
        'MedClinic Scheduler',
        '{"business_hours": "6:00-22:00", "timezone": "America/New_York", "booking_window": 30, "reminder_times": [24, 2]}',
        '+1-555-7004',
        'schedule@medclinic.com',
        'active',
        NOW() - INTERVAL '15 minutes'
    );

-- Insert usage logs
INSERT INTO public.usage_logs (instance_id, usage_type, duration_seconds, quantity, cost, created_at) 
SELECT 
    ai.id,
    (ARRAY['call', 'email', 'task'])[floor(random() * 3 + 1)]::usage_type,
    floor(random() * 600 + 30),
    1,
    random() * 2.50 + 0.10,
    NOW() - (random() * INTERVAL '30 days')
FROM public.agent_instances ai
CROSS JOIN generate_series(1, 50);

-- Insert activity logs
INSERT INTO public.activity_logs (instance_id, activity_type, activity_data, success, duration_ms, created_at)
SELECT 
    ai.id,
    (ARRAY['call_answered', 'email_sent', 'task_completed', 'escalation_triggered', 'meeting_scheduled'])[floor(random() * 5 + 1)],
    jsonb_build_object(
        'user_id', 'user_' || floor(random() * 1000),
        'action', 'processed_request',
        'result', 'success'
    ),
    random() > 0.1,
    floor(random() * 5000 + 100),
    NOW() - (random() * INTERVAL '30 days')
FROM public.agent_instances ai
CROSS JOIN generate_series(1, 100);

-- Insert reviews
INSERT INTO public.reviews (agent_id, business_id, rating, title, comment, pros, cons, created_at) VALUES
    (
        (SELECT id FROM public.agents WHERE slug = 'customercare-pro'),
        (SELECT id FROM public.business_profiles WHERE user_id = '11111111-1111-1111-1111-111111111111'),
        5,
        'Excellent customer service agent',
        'This agent has transformed our customer support. Response times are incredible and customers love the natural conversations.',
        'Fast response times, natural language, easy setup',
        'Could use more integrations with our existing tools',
        NOW() - INTERVAL '10 days'
    ),
    (
        (SELECT id FROM public.agents WHERE slug = 'healthdesk-assistant'),
        (SELECT id FROM public.business_profiles WHERE user_id = '22222222-2222-2222-2222-222222222222'),
        4,
        'Great for healthcare workflows',
        'HIPAA compliance is excellent and patients feel comfortable interacting with it. Saves us hours of admin work daily.',
        'HIPAA compliant, patient-friendly, saves time',
        'Sometimes struggles with complex medical terminology',
        NOW() - INTERVAL '5 days'
    ),
    (
        (SELECT id FROM public.agents WHERE slug = 'schedulemaster'),
        (SELECT id FROM public.business_profiles WHERE user_id = '22222222-2222-2222-2222-222222222222'),
        5,
        'Scheduling made simple',
        'No more double bookings or missed appointments. This agent handles our entire scheduling workflow flawlessly.',
        'Perfect scheduling, timezone handling, automated reminders',
        'None so far',
        NOW() - INTERVAL '2 days'
    );

-- Insert invoices
INSERT INTO public.invoices (business_id, stripe_invoice_id, invoice_number, amount, tax, total, status, due_date, paid_at, period_start, period_end, line_items) VALUES
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '11111111-1111-1111-1111-111111111111'),
        'in_test1',
        'INV-2024-001',
        149.00,
        11.92,
        160.92,
        'paid',
        NOW() - INTERVAL '5 days',
        NOW() - INTERVAL '3 days',
        NOW() - INTERVAL '30 days',
        NOW() - INTERVAL '1 day',
        '[{"description": "CustomerCare Pro - Monthly Subscription", "amount": 149.00, "quantity": 1}]'
    ),
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '22222222-2222-2222-2222-222222222222'),
        'in_test2',
        'INV-2024-002',
        278.00,
        22.24,
        300.24,
        'paid',
        NOW() - INTERVAL '3 days',
        NOW() - INTERVAL '1 day',
        NOW() - INTERVAL '30 days',
        NOW() - INTERVAL '1 day',
        '[{"description": "HealthDesk Assistant - Monthly Subscription", "amount": 199.00, "quantity": 1}, {"description": "ScheduleMaster - Monthly Subscription", "amount": 79.00, "quantity": 1}]'
    );

-- Insert team members
INSERT INTO public.team_members (business_id, user_id, role, permissions) VALUES
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '11111111-1111-1111-1111-111111111111'),
        '11111111-1111-1111-1111-111111111111',
        'owner',
        '{"view_agents": true, "manage_agents": true, "view_billing": true, "manage_billing": true, "invite_members": true, "manage_team": true}'
    );

-- Insert sample integrations
INSERT INTO public.integrations (business_id, service_name, configuration, is_active) VALUES
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '11111111-1111-1111-1111-111111111111'),
        'slack',
        '{"webhook_url": "https://hooks.slack.com/test", "channel": "#customer-support", "notifications": ["new_ticket", "escalation"]}',
        true
    ),
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '22222222-2222-2222-2222-222222222222'),
        'google_calendar',
        '{"calendar_id": "primary", "timezone": "America/New_York", "default_duration": 30}',
        true
    );

-- Update agent performance metrics using our function
SELECT update_agent_performance_metrics(id) FROM public.agents;

-- Add some webhook configurations
INSERT INTO public.webhooks (business_id, url, events, is_active) VALUES
    (
        (SELECT id FROM public.business_profiles WHERE user_id = '11111111-1111-1111-1111-111111111111'),
        'https://api.techstartup.com/webhooks/botjob',
        ARRAY['agent.task_completed', 'agent.escalation_triggered', 'subscription.updated'],
        true
    );

-- Refresh statistics
ANALYZE;