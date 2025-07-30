import React from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { QuickStats } from '../components/dashboard/QuickStats';
import { ActiveAgents } from '../components/dashboard/ActiveAgents';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { QuickActions } from '../components/dashboard/QuickActions';
export const BusinessDashboard = () => {
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        <QuickStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <ActiveAgents />
            <ActivityFeed />
          </div>
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>
      </main>
    </div>;
};