import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

// Pages
import { SystemAdministration } from './pages/SystemAdministration';
import { ContentManagement } from './pages/ContentManagement';
import { BusinessDashboard } from './pages/BusinessDashboard';
import { AgentManagement } from './pages/AgentManagement';
import { Analytics } from './pages/Analytics';
import { TeamManagement } from './pages/TeamManagement';
import { MultiAgentCoordination } from './pages/MultiAgentCoordination';
import { BillingDashboard } from './pages/BillingDashboard';
import { AgentDevelopment } from './pages/AgentDevelopment';
import { ComplianceDashboard } from './pages/ComplianceDashboard';
import { SecurityCenter } from './pages/SecurityCenter';
import { LandingPage } from './pages/LandingPage';
import { ProfileSettings } from './pages/ProfileSettings';
import { AgentSetupWizard } from './pages/AgentSetupWizard';
import { AgentMarketplace } from './pages/AgentMarketplace';

// Auth Components
import { LoginFlow } from './components/auth/Login/LoginFlow';
import { BusinessSignupFlow } from './components/auth/BusinessSignup/BusinessSignupFlow';
import { DeveloperSignupFlow } from './components/auth/DeveloperSignup/DeveloperSignupFlow';

// Navigation
import { ViewMenu } from './components/navigation/ViewMenu';
import { FloatingPageMenu } from './components/navigation/FloatingPageMenu';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginFlow />} />
          <Route path="/signup/business" element={<BusinessSignupFlow />} />
          <Route path="/signup/developer" element={<DeveloperSignupFlow />} />
          
          {/* Business Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute requireUserType="business" requireOnboarding>
              <>
                <ViewMenu />
                <BusinessDashboard />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/agents" element={
            <ProtectedRoute requireUserType="business">
              <>
                <ViewMenu />
                <AgentManagement />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/marketplace" element={
            <ProtectedRoute>
              <>
                <ViewMenu />
                <AgentMarketplace />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/analytics" element={
            <ProtectedRoute requireUserType="business">
              <>
                <ViewMenu />
                <Analytics />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/team-management" element={
            <ProtectedRoute requireUserType="business">
              <>
                <ViewMenu />
                <TeamManagement />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/multi-agent-coordination" element={
            <ProtectedRoute requireUserType="business">
              <>
                <ViewMenu />
                <MultiAgentCoordination />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/billing" element={
            <ProtectedRoute requireUserType="business">
              <>
                <ViewMenu />
                <BillingDashboard />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/compliance" element={
            <ProtectedRoute requireUserType="business">
              <>
                <ViewMenu />
                <ComplianceDashboard />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/security" element={
            <ProtectedRoute requireUserType="business">
              <>
                <ViewMenu />
                <SecurityCenter />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/agent-setup-wizard" element={
            <ProtectedRoute requireUserType="business">
              <>
                <ViewMenu />
                <AgentSetupWizard />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/agent-setup-wizard/:agentId" element={
            <ProtectedRoute requireUserType="business">
              <>
                <ViewMenu />
                <AgentSetupWizard />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          {/* Developer Routes */}
          <Route path="/dev-dashboard" element={
            <ProtectedRoute requireUserType="developer" requireOnboarding>
              <>
                <ViewMenu />
                <AgentDevelopment />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          {/* Shared Routes */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <>
                <ViewMenu />
                <ProfileSettings />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute requireUserType="admin">
              <>
                <ViewMenu />
                <SystemAdministration />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/content" element={
            <ProtectedRoute requireUserType="admin">
              <>
                <ViewMenu />
                <ContentManagement />
                <FloatingPageMenu />
              </>
            </ProtectedRoute>
          } />
          
          {/* Catch all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;