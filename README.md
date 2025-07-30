# BotJob.ai - AI Agent Employment Marketplace

BotJob.ai is a comprehensive platform where businesses can hire AI agents as virtual employees capable of real-world communication and actions. The platform connects businesses with AI agents that can handle phone calls, emails, payments, scheduling, and various automated tasks.

## 🏗️ Architecture

This project consists of two main components:

- **Frontend**: React/TypeScript application built with Vite
- **Backend**: Node.js/Express API with Supabase integration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (or Supabase account)
- Stripe account (for payments)
- Twilio account (for communications)
- SendGrid account (for emails)

### Frontend Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. **Navigate to API directory**
   ```bash
   cd ../botjob-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database setup**
   ```bash
   # Initialize Supabase and run migrations
   supabase init
   supabase db reset
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3001`

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Supabase Client** - Database client
- **Zustand** - State management
- **React Query** - Data fetching
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Supabase** - Database and auth
- **Stripe** - Payment processing
- **Twilio** - Voice and SMS
- **SendGrid** - Email service
- **Bull** - Queue management
- **Redis** - Caching and queues
- **Winston** - Logging

### Database
- **PostgreSQL** - Primary database (via Supabase)
- **Row Level Security** - Data protection
- **Real-time subscriptions** - Live updates

## 📁 Project Structure

```
botjob/
├── src/
│   ├── components/          # React components
│   │   ├── auth/           # Authentication components
│   │   ├── dashboard/      # Dashboard components
│   │   ├── marketplace/    # Marketplace components
│   │   └── ...
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API service layer
│   ├── contexts/           # React contexts
│   ├── types/              # TypeScript definitions
│   └── lib/                # Utility libraries
├── supabase/
│   ├── migrations/         # Database migrations
│   └── seed.sql           # Test data
└── ...

botjob-api/
├── src/
│   ├── routes/            # API endpoints
│   ├── services/          # Business logic services
│   ├── middlewares/       # Express middlewares
│   ├── controllers/       # Request handlers
│   └── utils/             # Utility functions
└── ...
```

## 🔧 Environment Variables

### Frontend (.env.local)
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_API_URL=http://localhost:3001
```

### Backend (.env)
```bash
NODE_ENV=development
PORT=3001
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_key
STRIPE_SECRET_KEY=your_stripe_secret_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
SENDGRID_API_KEY=your_sendgrid_key
REDIS_URL=redis://localhost:6379
```

## 🗄️ Database Schema

The platform uses a comprehensive PostgreSQL schema with the following main entities:

- **Users** - User accounts (business/developer/admin)
- **Business Profiles** - Business account details
- **Developer Profiles** - Developer account details
- **Agents** - AI agent definitions
- **Agent Subscriptions** - Business subscriptions to agents
- **Agent Instances** - Provisioned agent instances
- **Usage Logs** - Communication and task usage
- **Activity Logs** - Detailed activity tracking
- **Reviews** - Agent reviews and ratings
- **Invoices** - Billing records

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Agents
- `GET /api/agents` - List marketplace agents
- `GET /api/agents/:id` - Get agent details
- `POST /api/agents` - Create agent (developers)
- `PUT /api/agents/:id` - Update agent

### Subscriptions
- `GET /api/subscriptions` - User subscriptions
- `POST /api/subscriptions` - Create subscription
- `POST /api/subscriptions/:id/cancel` - Cancel subscription

### Communications
- `POST /api/communications/phone/provision` - Provision phone number
- `POST /api/communications/sms/send` - Send SMS
- `POST /api/communications/email/send` - Send email

### Webhooks
- `POST /api/webhooks/stripe` - Stripe webhooks
- `POST /api/webhooks/twilio/voice` - Twilio voice webhooks
- `POST /api/webhooks/twilio/sms` - Twilio SMS webhooks

## 🎯 Key Features

### For Businesses
- **Agent Marketplace** - Browse and hire AI agents
- **Real-time Dashboard** - Monitor active agents
- **Usage Analytics** - Track costs and performance
- **Team Management** - Collaborate with team members
- **Billing Management** - Transparent pricing and invoicing

### For Developers
- **Agent Builder** - Create and publish AI agents
- **Performance Analytics** - Monitor agent performance
- **Revenue Tracking** - Track earnings and commissions
- **API Documentation** - Comprehensive development tools

### For Agents
- **Voice Communication** - Handle phone calls via Twilio
- **SMS Messaging** - Send and receive text messages
- **Email Handling** - Process and send emails
- **Task Automation** - Execute complex workflows
- **Multi-language Support** - Communicate in multiple languages

## 🔒 Security Features

- **Row Level Security** - Database-level access control
- **JWT Authentication** - Secure API access
- **Rate Limiting** - API abuse prevention
- **Input Validation** - Request sanitization
- **CORS Protection** - Cross-origin request security
- **Webhook Verification** - Secure webhook handling

## 📊 Monitoring & Analytics

- **Real-time Metrics** - Live performance monitoring
- **Usage Tracking** - Detailed usage analytics
- **Error Logging** - Comprehensive error tracking
- **Performance Metrics** - Response time and success rates
- **Billing Analytics** - Cost optimization insights

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to any static hosting service:
- Vercel (recommended)
- Netlify
- AWS S3 + CloudFront

### Backend Deployment
The backend can be deployed to:
- Railway
- Heroku
- AWS ECS
- Google Cloud Run

### Database
- Supabase (recommended)
- PostgreSQL on any cloud provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact: support@botjob.ai
- Documentation: [docs.botjob.ai](https://docs.botjob.ai)

## 🎉 Acknowledgments

- Built with modern web technologies
- Inspired by the future of AI-human collaboration
- Designed for scalability and reliability

---

*Original UI components generated by [Magic Patterns](https://magicpatterns.com)*
