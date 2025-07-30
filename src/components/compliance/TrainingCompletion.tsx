import React, { useState } from 'react';
import { BookOpen, Users, AlertCircle, CheckCircle, Clock, User, Search, Filter, ChevronDown } from 'lucide-react';
export const TrainingCompletion = () => {
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  // Sample training courses
  const trainingCourses = [{
    id: 'course-1',
    name: 'Data Privacy Fundamentals',
    category: 'Privacy',
    description: 'Overview of data privacy principles and regulations',
    required: ['All Employees'],
    duration: 60,
    validityPeriod: 365,
    compliance: {
      total: 48,
      completed: 42,
      overdue: 3,
      notStarted: 3
    }
  }, {
    id: 'course-2',
    name: 'HIPAA Compliance',
    category: 'Healthcare',
    description: 'Training on HIPAA regulations and protected health information',
    required: ['Healthcare', 'Customer Support', 'Development'],
    duration: 90,
    validityPeriod: 365,
    compliance: {
      total: 32,
      completed: 28,
      overdue: 2,
      notStarted: 2
    }
  }, {
    id: 'course-3',
    name: 'Security Awareness',
    category: 'Security',
    description: 'Basic security awareness training for all employees',
    required: ['All Employees'],
    duration: 45,
    validityPeriod: 180,
    compliance: {
      total: 48,
      completed: 45,
      overdue: 1,
      notStarted: 2
    }
  }, {
    id: 'course-4',
    name: 'PCI DSS Compliance',
    category: 'Payment',
    description: 'Training on payment card industry data security standards',
    required: ['Finance', 'Development', 'Operations'],
    duration: 75,
    validityPeriod: 365,
    compliance: {
      total: 24,
      completed: 20,
      overdue: 4,
      notStarted: 0
    }
  }, {
    id: 'course-5',
    name: 'Code of Conduct',
    category: 'Ethics',
    description: 'Company code of conduct and ethical guidelines',
    required: ['All Employees'],
    duration: 30,
    validityPeriod: 365,
    compliance: {
      total: 48,
      completed: 48,
      overdue: 0,
      notStarted: 0
    }
  }];
  // Sample employee training records
  const employeeTrainingRecords = [{
    id: 'emp-1',
    name: 'John Smith',
    email: 'john.smith@acme.example.com',
    department: 'Development',
    position: 'Senior Developer',
    courses: [{
      courseId: 'course-1',
      status: 'completed',
      completionDate: '2023-04-15T00:00:00Z',
      expiryDate: '2024-04-15T00:00:00Z'
    }, {
      courseId: 'course-2',
      status: 'completed',
      completionDate: '2023-05-10T00:00:00Z',
      expiryDate: '2024-05-10T00:00:00Z'
    }, {
      courseId: 'course-3',
      status: 'completed',
      completionDate: '2023-03-22T00:00:00Z',
      expiryDate: '2023-09-22T00:00:00Z'
    }, {
      courseId: 'course-4',
      status: 'overdue',
      completionDate: null,
      expiryDate: null
    }, {
      courseId: 'course-5',
      status: 'completed',
      completionDate: '2023-01-05T00:00:00Z',
      expiryDate: '2024-01-05T00:00:00Z'
    }]
  }, {
    id: 'emp-2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@acme.example.com',
    department: 'Compliance',
    position: 'Compliance Officer',
    courses: [{
      courseId: 'course-1',
      status: 'completed',
      completionDate: '2023-03-12T00:00:00Z',
      expiryDate: '2024-03-12T00:00:00Z'
    }, {
      courseId: 'course-2',
      status: 'completed',
      completionDate: '2023-03-15T00:00:00Z',
      expiryDate: '2024-03-15T00:00:00Z'
    }, {
      courseId: 'course-3',
      status: 'completed',
      completionDate: '2023-02-28T00:00:00Z',
      expiryDate: '2023-08-28T00:00:00Z'
    }, {
      courseId: 'course-4',
      status: 'completed',
      completionDate: '2023-04-05T00:00:00Z',
      expiryDate: '2024-04-05T00:00:00Z'
    }, {
      courseId: 'course-5',
      status: 'completed',
      completionDate: '2023-01-10T00:00:00Z',
      expiryDate: '2024-01-10T00:00:00Z'
    }]
  }, {
    id: 'emp-3',
    name: 'Michael Wong',
    email: 'michael.wong@acme.example.com',
    department: 'Customer Support',
    position: 'Support Manager',
    courses: [{
      courseId: 'course-1',
      status: 'completed',
      completionDate: '2023-05-05T00:00:00Z',
      expiryDate: '2024-05-05T00:00:00Z'
    }, {
      courseId: 'course-2',
      status: 'not_started',
      completionDate: null,
      expiryDate: null
    }, {
      courseId: 'course-3',
      status: 'completed',
      completionDate: '2023-04-12T00:00:00Z',
      expiryDate: '2023-10-12T00:00:00Z'
    }, {
      courseId: 'course-5',
      status: 'completed',
      completionDate: '2023-02-15T00:00:00Z',
      expiryDate: '2024-02-15T00:00:00Z'
    }]
  }, {
    id: 'emp-4',
    name: 'Emily Chen',
    email: 'emily.chen@acme.example.com',
    department: 'Finance',
    position: 'Financial Analyst',
    courses: [{
      courseId: 'course-1',
      status: 'completed',
      completionDate: '2023-03-20T00:00:00Z',
      expiryDate: '2024-03-20T00:00:00Z'
    }, {
      courseId: 'course-3',
      status: 'overdue',
      completionDate: '2022-09-10T00:00:00Z',
      expiryDate: '2023-03-10T00:00:00Z'
    }, {
      courseId: 'course-4',
      status: 'completed',
      completionDate: '2023-02-25T00:00:00Z',
      expiryDate: '2024-02-25T00:00:00Z'
    }, {
      courseId: 'course-5',
      status: 'completed',
      completionDate: '2023-01-20T00:00:00Z',
      expiryDate: '2024-01-20T00:00:00Z'
    }]
  }, {
    id: 'emp-5',
    name: 'David Kim',
    email: 'david.kim@acme.example.com',
    department: 'Development',
    position: 'Frontend Developer',
    courses: [{
      courseId: 'course-1',
      status: 'not_started',
      completionDate: null,
      expiryDate: null
    }, {
      courseId: 'course-2',
      status: 'overdue',
      completionDate: null,
      expiryDate: null
    }, {
      courseId: 'course-3',
      status: 'completed',
      completionDate: '2023-05-05T00:00:00Z',
      expiryDate: '2023-11-05T00:00:00Z'
    }, {
      courseId: 'course-4',
      status: 'completed',
      completionDate: '2023-04-15T00:00:00Z',
      expiryDate: '2024-04-15T00:00:00Z'
    }, {
      courseId: 'course-5',
      status: 'completed',
      completionDate: '2023-02-10T00:00:00Z',
      expiryDate: '2024-02-10T00:00:00Z'
    }]
  }];
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            Completed
          </span>;
      case 'in_progress':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            In Progress
          </span>;
      case 'overdue':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            Overdue
          </span>;
      case 'not_started':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            Not Started
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>;
    }
  };
  // Calculate overall compliance stats
  const calculateOverallStats = () => {
    let totalRequired = 0;
    let totalCompleted = 0;
    let totalOverdue = 0;
    let totalNotStarted = 0;
    trainingCourses.forEach(course => {
      totalRequired += course.compliance.total;
      totalCompleted += course.compliance.completed;
      totalOverdue += course.compliance.overdue;
      totalNotStarted += course.compliance.notStarted;
    });
    return {
      totalRequired,
      totalCompleted,
      totalOverdue,
      totalNotStarted,
      complianceRate: Math.round(totalCompleted / totalRequired * 100)
    };
  };
  const overallStats = calculateOverallStats();
  return <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Overall Compliance
            </h3>
            <div className="bg-green-100 text-green-800 p-2 rounded-full">
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-3xl font-bold text-gray-900">
              {overallStats.complianceRate}%
            </p>
            <p className="ml-2 text-sm text-gray-500 mb-1">completion rate</p>
          </div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{
            width: `${overallStats.complianceRate}%`
          }}></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Completed</h3>
            <div className="bg-green-100 text-green-800 p-2 rounded-full">
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-green-600">
            {overallStats.totalCompleted}
          </p>
          <p className="text-sm text-gray-500 mt-1">completed trainings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Overdue</h3>
            <div className="bg-red-100 text-red-800 p-2 rounded-full">
              <AlertCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-red-600">
            {overallStats.totalOverdue}
          </p>
          <p className="text-sm text-gray-500 mt-1">overdue trainings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Not Started</h3>
            <div className="bg-gray-100 text-gray-800 p-2 rounded-full">
              <Clock className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-600">
            {overallStats.totalNotStarted}
          </p>
          <p className="text-sm text-gray-500 mt-1">not started trainings</p>
        </div>
      </div>
      {/* Course Compliance */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
            Training Course Compliance
          </h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
            Add Course
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Required For
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Validity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Compliance
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trainingCourses.map(course => <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {course.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {course.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {course.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.required.join(', ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.duration} min
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.validityPeriod === 365 ? '1 year' : `${Math.round(course.validityPeriod / 30)} months`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>
                          {course.compliance.completed} of{' '}
                          {course.compliance.total} completed
                        </span>
                        <span className="font-medium">
                          {Math.round(course.compliance.completed / course.compliance.total * 100)}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{
                      width: `${course.compliance.completed / course.compliance.total * 100}%`
                    }} />
                      </div>
                      {course.compliance.overdue > 0 && <div className="text-xs text-red-600 mt-1">
                          {course.compliance.overdue} overdue
                        </div>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      View Details
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Employee Training Status */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-500" />
            Employee Training Status
          </h3>
        </div>
        <div className="p-6">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="department-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <div className="relative">
                <select id="department-filter" value={departmentFilter} onChange={e => setDepartmentFilter(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Departments</option>
                  <option value="development">Development</option>
                  <option value="compliance">Compliance</option>
                  <option value="customer-support">Customer Support</option>
                  <option value="finance">Finance</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Users className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <div className="relative">
                <select id="status-filter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Statuses</option>
                  <option value="completed">Completed</option>
                  <option value="overdue">Overdue</option>
                  <option value="not_started">Not Started</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="employee-search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Employee
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input type="text" id="employee-search" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search by name or email" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {employeeTrainingRecords.map(employee => {
            // Calculate employee compliance
            const totalRequired = employee.courses.length;
            const completed = employee.courses.filter(c => c.status === 'completed').length;
            const overdue = employee.courses.filter(c => c.status === 'overdue').length;
            const notStarted = employee.courses.filter(c => c.status === 'not_started').length;
            const complianceRate = Math.round(completed / totalRequired * 100);
            return <div key={employee.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <User className="h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          {employee.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {employee.position} • {employee.department}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center">
                      <div className="text-right mr-4">
                        <div className="text-sm text-gray-500">Compliance</div>
                        <div className="text-lg font-bold text-gray-900">
                          {complianceRate}%
                        </div>
                      </div>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${complianceRate >= 90 ? 'bg-green-500' : complianceRate >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${complianceRate}%`
                    }} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course
                          </th>
                          <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Completed
                          </th>
                          <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Expires
                          </th>
                          <th scope="col" className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {employee.courses.map(course => {
                      const courseInfo = trainingCourses.find(c => c.id === course.courseId);
                      return <tr key={`${employee.id}-${course.courseId}`}>
                              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                {courseInfo?.name || course.courseId}
                              </td>
                              <td className="px-3 py-2 whitespace-nowrap">
                                {getStatusBadge(course.status)}
                              </td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                {formatDate(course.completionDate)}
                              </td>
                              <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                {formatDate(course.expiryDate)}
                              </td>
                              <td className="px-3 py-2 whitespace-nowrap text-right text-sm font-medium">
                                {course.status === 'overdue' || course.status === 'not_started' ? <button className="text-blue-600 hover:text-blue-900">
                                    Send Reminder
                                  </button> : <button className="text-blue-600 hover:text-blue-900">
                                    View Certificate
                                  </button>}
                              </td>
                            </tr>;
                    })}
                      </tbody>
                    </table>
                  </div>
                </div>;
          })}
          </div>
          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">5</span> of{' '}
                <span className="font-medium">48</span> employees
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <ChevronDown className="h-5 w-5 rotate-90" />
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-blue-500 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  4
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <ChevronDown className="h-5 w-5 -rotate-90" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>;
};