import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { TeamMembersList } from '../components/team/TeamMembersList';
import { InviteTeamMember } from '../components/team/InviteTeamMember';
import { AgentAssignment } from '../components/team/AgentAssignment';
import { CollaborationTools } from '../components/team/CollaborationTools';
import { PermissionsMatrix } from '../components/team/PermissionsMatrix';
import { Users, UserPlus, Share2, MessageSquare, Shield } from 'lucide-react';
export const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState('members');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'members':
        return <TeamMembersList />;
      case 'invite':
        return <InviteTeamMember />;
      case 'agents':
        return <AgentAssignment />;
      case 'collaboration':
        return <CollaborationTools />;
      case 'permissions':
        return <PermissionsMatrix />;
      default:
        return null;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
          <div className="flex space-x-3">
            <button onClick={() => setActiveTab('invite')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <UserPlus className="h-5 w-5 mr-2" />
              Invite Team Member
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('members')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'members' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Users className="h-5 w-5 mr-2" />
              Team Members
            </button>
            <button onClick={() => setActiveTab('agents')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'agents' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Share2 className="h-5 w-5 mr-2" />
              Agent Assignment
            </button>
            <button onClick={() => setActiveTab('collaboration')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'collaboration' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <MessageSquare className="h-5 w-5 mr-2" />
              Collaboration Tools
            </button>
            <button onClick={() => setActiveTab('permissions')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'permissions' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Shield className="h-5 w-5 mr-2" />
              Permissions
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>;
};