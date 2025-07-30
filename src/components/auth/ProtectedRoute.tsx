import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireUserType?: 'business' | 'developer' | 'admin';
  requireOnboarding?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true,
  requireUserType,
  requireOnboarding = false
}) => {
  const { user, userType, userProfile, loading } = useAuth();
  const location = useLocation();

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Check if authentication is required
  if (requireAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if specific user type is required
  if (requireUserType && userType !== requireUserType) {
    // Redirect to appropriate dashboard based on user type
    if (userType === 'business') {
      return <Navigate to="/dashboard" replace />;
    } else if (userType === 'developer') {
      return <Navigate to="/dev-dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  // Check if onboarding is required
  if (requireOnboarding && userProfile) {
    if (userType === 'business' && !userProfile.onboarding_completed) {
      return <Navigate to="/onboarding/business" replace />;
    } else if (userType === 'developer' && !userProfile.verified) {
      return <Navigate to="/onboarding/developer" replace />;
    }
  }

  return <>{children}</>;
};