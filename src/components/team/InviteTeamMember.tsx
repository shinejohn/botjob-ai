import React, { useState } from 'react';
import { Mail, User, Shield, X, Check, AlertCircle } from 'lucide-react';
export const InviteTeamMember = () => {
  const [inviteMethod, setInviteMethod] = useState('email');
  const [emails, setEmails] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('Viewer');
  const [customMessage, setCustomMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  // Available roles
  const roles = [{
    id: 'admin',
    name: 'Admin',
    description: 'Full access to all settings and agents'
  }, {
    id: 'manager',
    name: 'Manager',
    description: 'Can manage agents and view analytics'
  }, {
    id: 'developer',
    name: 'Developer',
    description: 'Can create and modify agents'
  }, {
    id: 'viewer',
    name: 'Viewer',
    description: 'Can only view agents and analytics'
  }];
  // Default permissions for each role
  const rolePermissions = {
    Admin: ['Manage team members', 'Create and delete agents', 'Configure all agent settings', 'View all analytics', 'Manage billing and subscription'],
    Manager: ['View team members', 'Create agents', 'Configure agent settings', 'View all analytics'],
    Developer: ['Create and modify agents', 'Configure technical settings', 'View assigned analytics'],
    Viewer: ['View assigned agents', 'View basic analytics']
  };
  // Handle adding email to the list
  const addEmail = () => {
    if (currentEmail && isValidEmail(currentEmail) && !emails.includes(currentEmail)) {
      setEmails([...emails, currentEmail]);
      setCurrentEmail('');
    }
  };
  // Handle removing email from the list
  const removeEmail = (email: string) => {
    setEmails(emails.filter(e => e !== email));
  };
  // Validate email format
  const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emails.length > 0) {
      // In a real app, this would send invitations to the emails
      console.log('Sending invitations to:', emails);
      console.log('Role:', selectedRole);
      console.log('Custom message:', customMessage);
      // Show success message
      setShowSuccess(true);
      // Reset form
      setTimeout(() => {
        setEmails([]);
        setCustomMessage('');
        setShowSuccess(false);
      }, 3000);
    }
  };
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Invite Team Members
      </h2>
      {/* Success Message */}
      {showSuccess && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-green-800 font-medium">
              Invitations Sent Successfully
            </h3>
            <p className="text-green-700 text-sm">
              Your team invitations have been sent. New members will receive an
              email with instructions to join your team.
            </p>
          </div>
        </div>}
      <form onSubmit={handleSubmit}>
        {/* Invite Method Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <button type="button" onClick={() => setInviteMethod('email')} className={`py-2 px-4 border-b-2 font-medium text-sm ${inviteMethod === 'email' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Mail className="inline-block h-4 w-4 mr-1" />
              Email Invites
            </button>
            <button type="button" onClick={() => setInviteMethod('link')} className={`py-2 px-4 border-b-2 font-medium text-sm ${inviteMethod === 'link' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <User className="inline-block h-4 w-4 mr-1" />
              Invite Link
            </button>
          </div>
        </div>
        {inviteMethod === 'email' ? <>
            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Addresses
              </label>
              <div className="flex">
                <div className="relative flex-1">
                  <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input type="email" value={currentEmail} onChange={e => setCurrentEmail(e.target.value)} onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addEmail();
                }
              }} placeholder="Enter email address" className="pl-10 pr-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <button type="button" onClick={addEmail} className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                  Add
                </button>
              </div>
              {currentEmail && !isValidEmail(currentEmail) && <p className="mt-1 text-sm text-red-600">
                  Please enter a valid email address
                </p>}
              {/* Email Tags */}
              {emails.length > 0 && <div className="mt-3 flex flex-wrap gap-2">
                  {emails.map(email => <div key={email} className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      <Mail className="h-3 w-3 mr-1" />
                      <span className="mr-1">{email}</span>
                      <button type="button" onClick={() => removeEmail(email)} className="text-blue-500 hover:text-blue-700">
                        <X className="h-3 w-3" />
                      </button>
                    </div>)}
                </div>}
            </div>
          </> : <>
            {/* Invite Link */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Invite Link
              </label>
              <div className="flex">
                <input type="text" readOnly value="https://botjob.ai/team/join/xyz123abc456def789" className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50" />
                <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700" onClick={() => {
              navigator.clipboard.writeText('https://botjob.ai/team/join/xyz123abc456def789');
            }}>
                  Copy
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                This link will expire in 7 days. Anyone with this link can join
                your team with the selected role.
              </p>
            </div>
          </>}
        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Shield className="inline-block h-4 w-4 mr-1" />
            Assign Role
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map(role => <div key={role.id} onClick={() => setSelectedRole(role.name)} className={`border rounded-lg p-4 cursor-pointer ${selectedRole === role.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                <div className="flex items-center">
                  <input type="radio" id={role.id} name="role" checked={selectedRole === role.name} onChange={() => setSelectedRole(role.name)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                  <label htmlFor={role.id} className="ml-2 block text-sm font-medium text-gray-900">
                    {role.name}
                  </label>
                </div>
                <p className="mt-1 text-sm text-gray-500 ml-6">
                  {role.description}
                </p>
              </div>)}
          </div>
        </div>
        {/* Role Permissions */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700">
              Permissions for this role
            </h3>
            <button type="button" className="text-sm text-blue-600 hover:text-blue-800">
              Customize
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
            <ul className="space-y-2">
              {(rolePermissions[selectedRole as keyof typeof rolePermissions] || []).map((permission, index) => <li key={index} className="flex items-center text-sm text-gray-700">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {permission}
                </li>)}
            </ul>
          </div>
        </div>
        {/* Custom Message */}
        {inviteMethod === 'email' && <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Custom Message (Optional)
            </label>
            <textarea value={customMessage} onChange={e => setCustomMessage(e.target.value)} rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Add a personal message to your invitation email" />
          </div>}
        {/* Submit Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            {inviteMethod === 'email' ? <>
                {emails.length > 0 ? <>
                    Inviting {emails.length} team member
                    {emails.length !== 1 ? 's' : ''}
                  </> : <>Add at least one email address</>}
              </> : <>Anyone with the link can join as {selectedRole}</>}
          </div>
          <button type="submit" disabled={inviteMethod === 'email' && emails.length === 0} className={`px-6 py-2 rounded-md text-white ${inviteMethod === 'email' && emails.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
            {inviteMethod === 'email' ? 'Send Invitations' : 'Generate New Link'}
          </button>
        </div>
      </form>
      {/* Additional Info */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-md flex items-start">
        <AlertCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-blue-800 font-medium">About Team Roles</h3>
          <p className="text-blue-700 text-sm mt-1">
            Team members can only access features based on their assigned role.
            You can change roles at any time from the Team Members page.
          </p>
        </div>
      </div>
    </div>;
};