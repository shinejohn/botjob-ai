import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type UserProfile = Database['public']['Tables']['business_profiles']['Row'] | 
                   Database['public']['Tables']['developer_profiles']['Row'] | null;

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile;
  userType: 'business' | 'developer' | 'admin' | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, userType: 'business' | 'developer') => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: any) => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>(null);
  const [userType, setUserType] = useState<'business' | 'developer' | 'admin' | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (userId: string, type: string) => {
    if (type === 'business') {
      const { data, error } = await supabase
        .from('business_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (!error && data) {
        setUserProfile(data);
      }
    } else if (type === 'developer') {
      const { data, error } = await supabase
        .from('developer_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (!error && data) {
        setUserProfile(data);
      }
    }
  };

  const fetchUserType = async (userId: string) => {
    const { data, error } = await supabase
      .from('users')
      .select('user_type')
      .eq('id', userId)
      .single();
    
    if (!error && data) {
      setUserType(data.user_type);
      await fetchUserProfile(userId, data.user_type);
    }
  };

  useEffect(() => {
    // Check for localStorage-based demo auth first
    const storedUserType = localStorage.getItem('userType') as 'business' | 'developer' | 'admin' | null;
    const storedEmail = localStorage.getItem('userEmail');
    
    if (storedUserType && storedEmail) {
      // Create a mock user for demo purposes
      const mockUser = {
        id: `demo-${storedUserType}`,
        email: storedEmail,
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString()
      } as User;
      
      setUser(mockUser);
      setUserType(storedUserType);
      setLoading(false);
      return;
    }
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchUserType(session.user.id);
      }
      
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await fetchUserType(session.user.id);
        } else {
          setUserProfile(null);
          setUserType(null);
        }
        
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    return { error };
  };

  const signUp = async (email: string, password: string, userType: 'business' | 'developer') => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (!error && data.user) {
      // Create user record
      const { error: userError } = await supabase
        .from('users')
        .insert({
          id: data.user.id,
          email: data.user.email!,
          user_type: userType,
        });

      if (userError) {
        return { error: userError };
      }

      // Create profile based on user type
      if (userType === 'business') {
        const { error: profileError } = await supabase
          .from('business_profiles')
          .insert({
            user_id: data.user.id,
            company_name: '', // Will be filled during onboarding
            onboarding_completed: false,
          });
        
        if (profileError) {
          return { error: profileError };
        }
      } else if (userType === 'developer') {
        const { error: profileError } = await supabase
          .from('developer_profiles')
          .insert({
            user_id: data.user.id,
            name: '', // Will be filled during onboarding
            verified: false,
          });
        
        if (profileError) {
          return { error: profileError };
        }
      }
    }

    return { error };
  };

  const signOut = async () => {
    // Clear localStorage for demo accounts
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    
    await supabase.auth.signOut();
    setUser(null);
    setUserProfile(null);
    setUserType(null);
    setSession(null);
  };

  const updateProfile = async (updates: any) => {
    if (!user || !userType) {
      return { error: { message: 'User not authenticated' } };
    }

    let error;
    
    if (userType === 'business') {
      const { error: updateError } = await supabase
        .from('business_profiles')
        .update(updates)
        .eq('user_id', user.id);
      
      error = updateError;
    } else if (userType === 'developer') {
      const { error: updateError } = await supabase
        .from('developer_profiles')
        .update(updates)
        .eq('user_id', user.id);
      
      error = updateError;
    }

    if (!error) {
      // Refresh user profile
      await fetchUserProfile(user.id, userType);
    }

    return { error };
  };

  const value: AuthContextType = {
    user,
    userProfile,
    userType,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};