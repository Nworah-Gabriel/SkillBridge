import React from 'react';
import type { Module } from '../types';
import { Eye, AlertCircle, Clock, Trash2, MailPlus, Edit, BookOpen, GraduationCap, CheckCircle2, Layers, UserRoundX } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const getStatusConfig = () => {
    
    if (module.linkStatus === 'expired') {
      return {
        bgColor: 'bg-red-50',
        textColor: 'text-red-600',
        icon: AlertCircle,
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        message: 'Invitation link expired',
        buttonText: 'Resend Invite',
        buttonColor: 'text-red-600 hover:text-red-700 border-red-200 hover:border-red-300'
      };
    } else if (module.linkStatus === 'Invitation Sent') {
      return {
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        icon: MailPlus,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        message: 'Invitation sent to admin',
        buttonText: '',
        buttonColor: 'text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300'
      };
    } else if (module.status === 'inactive') {
      return {
        bgColor: 'bg-gray-50',
        textColor: 'text-gray-600',
        icon: UserRoundX,
        iconBg: 'bg-gray-100',
        iconColor: 'text-gray-600',
        message: 'No admin assigned',
        buttonText: 'Assign Admin',
        buttonColor: 'text-gray-600 hover:text-gray-700 border-gray-200 hover:border-gray-300'
      };
    } else {
      // Active status
      return {
        bgColor: 'bg-green-50',
        textColor: 'text-green-600',
        icon: CheckCircle2,
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        message: 'Admin has dashboard access',
        buttonText: null,
        buttonColor: ''
      };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 lg:p-6 hover:shadow-md transition-all">
      {/* Header with title and icon */}
      <div className="flex flex-col lg:flex-row items-start justify-between mb-4">
        <div className="flex items-start w-full lg:w-auto">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
            <Layers className="w-5 h-5 text-blue-900" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="font-semibold text-gray-800 text-sm lg:text-base">{module.code} — {module.title}</h3>
            </div>

            {/* Assigned Admin Section */}
            <div className="text-xs lg:text-sm">
              <p className="text-gray-500 text-xs lg:text-sm mb-1">Assigned Admin</p>
              {module.admin ? (
                <>
                  <p className="font-medium text-gray-800 text-base lg:text-lg">{module.admin.name}</p>
                  <p className="text-gray-500 text-xs lg:text-sm break-all">{module.admin.email}</p>
                </>
              ) : (
                <p className="text-gray-400">Not Assigned</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Icons - Stack on mobile, row on desktop */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0">
          <div className="flex justify-end">
            <div className="flex flex-wrap gap-2 lg:space-x-3">
              <button className="flex-1 lg:flex-none flex items-center justify-center border border-gray-400 rounded-xl p-2 lg:p-3 space-x-1 text-gray-600 hover:text-blue-700 text-xs lg:text-sm">
                <Eye size={16} />
                <span>View Details</span>
              </button>
              <button className="flex-1 lg:flex-none flex items-center justify-center border border-gray-400 rounded-xl p-2 lg:p-3 space-x-1 text-gray-600 hover:text-gray-700 text-xs lg:text-sm">
                <Edit size={16} />
                <span>Edit</span>
              </button>
              <button className="flex-1 lg:flex-none flex items-center justify-center border border-gray-400 rounded-xl p-2 lg:p-3 text-gray-600 hover:text-gray-700">
                <Trash2 size={16} className='text-red-500' />
              </button>
            </div>
          </div>

          {/* Stats Section - Wrap on mobile */}
          <div className="flex flex-wrap items-center gap-3 lg:space-x-4 text-xs lg:text-sm mt-4 lg:mt-8">
            <div className="flex items-center space-x-1 text-gray-800">
              <BookOpen size={16} className="text-blue-800 flex-shrink-0" />
              <span>{module.topics || 0} Topics</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-800">
              <GraduationCap size={16} className="text-blue-800 flex-shrink-0" />
              <span>{module.students || 0} Students</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-800">
              <Clock size={16} className="text-blue-800 flex-shrink-0" />
              <span>{module.hours || 0} Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Card and Progress Section - Stack on mobile, grid on desktop */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-6 mt-4">
        {/* Status Card */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between ${statusConfig.bgColor} rounded-xl p-3 max-w-sm w-full`}>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className={`w-10 h-10 ${statusConfig.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <StatusIcon className={`w-5 h-5 ${statusConfig.iconColor}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className={`font-semibold ${statusConfig.textColor} text-base lg:text-lg`}>
                  {module.linkStatus === 'expired' ? 'Expired' : 
                   module.linkStatus === 'Invitation Sent' ? 'Invitation Sent' : 
                   module.status.charAt(0).toUpperCase() + module.status.slice(1)}
                </h3>
              </div>
              <p className="text-gray-600 text-xs lg:text-sm">{statusConfig.message}</p>
            </div>
          </div>
          
          {statusConfig.buttonText && (
            <button className={`mt-2 sm:mt-0 flex items-center border ${statusConfig.buttonColor} bg-white rounded-lg px-3 py-1.5 text-xs font-medium transition-colors`}>
              <span>{statusConfig.buttonText}</span>
            </button>
          )}
        </div>

        {/* Progress Section */}
        {module.progress !== undefined && (
          <div className="flex items-center w-full">
            <div className="w-full">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500">Avg. Completion Progress</span>
                <span className="text-xs font-medium text-gray-700">{module.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-800 rounded-full transition-all duration-500"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleCard;