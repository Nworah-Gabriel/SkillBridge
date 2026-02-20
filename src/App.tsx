import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ModuleCard from './components/ModuleCard';
import ProjectCard from './components/ProjectCard';
import type { Module } from './types';
import { Filter, ChevronDown, Plus, Layers, Search, TrendingUp, GraduationCap, UserCheck, Award, ChevronRight, ChevronLeft, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Show 3 modules per page for demo

  const [modules] = useState<Module[]>([
    {
      id: '1',
      code: 'EMBA 701',
      title: 'Leadership & Organizational Behavior',
      progress: 92,
      admin: {
        name: 'Prof. Kunle Adebayo',
        email: 'k.unile@unile.edu.ng'
      },
      status: 'active',
      linkStatus: 'valid',
      description: 'A comprehensive corporate project integrating leadership principles, strategic thinking, and organizational transformation.',
      submissions: 38,
      pendingReviews: 9,
      hasAccess: true
    },
    {
      id: '2',
      code: 'EMBA 702',
      title: 'Strategic Management',
      progress: 85,
      admin: {
        name: 'Dr. Ifeoma Nwachukwu',
        email: 'if.ifeoma@nwachukwu.edu.ng'
      },
      status: 'active',
      linkStatus: 'Invitation Sent',
      description: 'A comprehensive corporate project integrating leadership principles, strategic thinking, and organizational transformation.',
      submissions: 38,
      pendingReviews: 9,
      hasAccess: true
    },
    {
      id: '3',
      code: 'EMBA 703',
      title: 'Corporate Finance',
      progress: 65,
      admin: {
        name: 'Prof. Kunle Adebayo',
        email: 'edebayokunle@fscu.edu.ng'
      },
      status: 'active',
      linkStatus: 'expired',
      description: 'A comprehensive corporate project integrating leadership principles, strategic thinking, and organizational transformation.',
      submissions: 38,
      pendingReviews: 9
    },
    {
      id: '4',
      progress: 65,
      code: 'EMBA 704',
      title: 'Business Ethics & Sustainability',
      admin: null,
      status: 'inactive',
      description: 'A comprehensive corporate project integrating leadership principles, strategic thinking, and organizational transformation.'
    },
    {
      id: '5',
      code: 'EMBA 705',
      title: 'Marketing Strategy',
      progress: 78,
      admin: {
        name: 'Dr. Amina Mohammed',
        email: 'a.mohammed@lbs.edu.ng'
      },
      status: 'active',
      linkStatus: 'valid',
      description: 'Strategic marketing principles for modern business challenges.',
      submissions: 25,
      pendingReviews: 4,
      hasAccess: true
    },
    {
      id: '6',
      code: 'EMBA 706',
      title: 'Operations Management',
      progress: 45,
      admin: {
        name: 'Prof. John Obi',
        email: 'j.obi@lbs.edu.ng'
      },
      status: 'active',
      linkStatus: 'Invitation Sent',
      description: 'Efficient operations and supply chain management.',
      submissions: 15,
      pendingReviews: 7
    }
  ]);

  const projects = [
    {
      title: 'Executive Leadership Capstone',
      description: 'A comprehensive corporate project integrating leadership principles, strategic thinking, and organizational transformation.',
      submissions: 38,
      pendingReviews: 9
    }
  ];

  // Filter modules based on search term and status filter
  const filteredModules = modules.filter(module => {
    // Search filter
    const matchesSearch = searchTerm === '' ||
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (module.admin?.name.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
      (module.admin?.email.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);

    // Status filter
    const matchesStatus = statusFilter === '' ||
      statusFilter === 'All Status' ||
      (statusFilter === 'Active' && module.status === 'active') ||
      (statusFilter === 'Inactive' && module.status === 'inactive') ||
      (statusFilter === 'Invitation Sent' && module.linkStatus === 'Invitation Sent') ||
      (statusFilter === 'Expired Link' && module.linkStatus === 'expired');

    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredModules.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedModules = filteredModules.slice(startIndex, startIndex + itemsPerPage);

  const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('');
    setCurrentPage(1);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="lg:ml-64">
        <Header toggleMobileMenu={toggleMobileMenu} />

        <main className="p-6 lg:p-6">
          {/* Course Info Card */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-1100 p-4 lg:p-8 rounded-xl text-white mb-6 lg:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-blue-100 text-xs lg:text-sm mb-1 lg:mb-2">Lagos Business School</p>
                <p className="text-xl lg:text-2xl font-semibold">Executive MBA (EMBA)</p>
              </div>

              <div className="w-full sm:w-48 lg:w-40 relative">
                <select
                  className="w-full pl-4 pr-10 py-2.5 bg-white rounded-lg text-sm font-bold text-gray-800 focus:outline-none transition-all appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-800">Switch Course</option>
                  <option value="emba" className="text-gray-800">Executive MBA (EMBA)</option>
                  <option value="mba" className="text-gray-800">MBA</option>
                  <option value="emba-online" className="text-gray-800">Executive MBA Online</option>
                  <option value="phd" className="text-gray-800">PhD Management</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8">
            <StatCard
              title="Total Module"
              value="8"
              icon={Layers}
              iconBgColor="bg-blue-50"
              iconColor="text-blue-900"
            />
            <StatCard
              title="Total Participants"
              value="485"
              icon={UserCheck}
              iconBgColor="bg-green-50"
              iconColor="text-green-500"
            />
            <StatCard
              title="Total Duration"
              value="8,540"
              icon={GraduationCap}
              iconBgColor="bg-blue-50"
              iconColor="text-blue-900"
            />
            <StatCard
              title="Completion Rate"
              value="85%"
              icon={TrendingUp}
              iconBgColor="bg-amber-50"
              iconColor="text-amber-500"
            />
          </div>

          {/* Manage Modules Section */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Manage Modules</h2>
                <p className="text-sm text-gray-500">
                  View and manage modules under <span className="font-semibold text-gray-700">Executive MBA (EMBA)</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  <Award size={18} />
                  <span>Manage Course Final Project</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-lg text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
                  <Plus size={18} />
                  <span>Create Module</span>
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            {/* Search and Filter */}
            <div className="w-full mb-4">
              <div className="flex flex-col sm:flex-row w-full bg-white rounded-xl shadow-sm p-4 gap-3">
                {/* Search section */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search courses, modules, students..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-10 py-2.5 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* Filter dropdown */}
                <div className="w-full sm:w-64 relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    <Filter size={16} className="text-gray-400" />
                  </div>
                  <select
                    className="w-full pl-10 pr-8 py-2.5 bg-gray-100 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                    value={statusFilter}
                    onChange={handleStatusFilterChange}
                  >
                    <option value="">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Invitation Sent">Invitation Sent</option>
                    <option value="Expired Link">Expired Link</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(searchTerm || statusFilter) && (
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-gray-500">Active filters:</span>
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      Search: "{searchTerm}"
                      <button onClick={() => setSearchTerm('')} className="hover:text-blue-900">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {statusFilter && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      Status: {statusFilter}
                      <button onClick={() => setStatusFilter('')} className="hover:text-blue-900">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-xs text-gray-500 hover:text-gray-700 underline"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Results count */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing {paginatedModules.length} of {filteredModules.length} modules
              </p>
            </div>

            {/* Modules Grid */}
            {paginatedModules.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {paginatedModules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <div className="flex flex-col items-center">
                  <Filter size={48} className="text-gray-300 mb-3" />
                  <h3 className="text-lg font-medium text-gray-700 mb-1">No modules found</h3>
                  <p className="text-sm text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Pagination - Only show if there are results */}
          {filteredModules.length > 0 && (
            <div className="flex items-center justify-center mt-6 lg:mt-8">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`flex items-center space-x-1 px-3 lg:px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm ${currentPage === 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <ChevronLeft size={16} />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`flex items-center space-x-1 px-3 lg:px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm ${currentPage === totalPages
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;