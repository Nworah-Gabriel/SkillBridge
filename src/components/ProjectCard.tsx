import React from 'react';
import { Eye, BookCheck, AlertTriangle, Edit, AwardIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  submissions: number;
  pendingReviews: number;
  variant?: 'default' | 'compact';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  submissions, 
  pendingReviews,
  variant = 'default' 
}) => {
  return (
    <div className={`bg-white rounded-xl border-l-4 border-blue-600 border border-gray-200 p-4 md:p-6 hover:shadow-md transition-all ${variant === 'compact' ? 'col-span-1' : 'col-span-2'}`}>
      {/* Mobile: Stack vertically, Desktop: Row */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
        
        {/* Left section with icon and content */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 flex-1">
          {/* Icon - stays at top on mobile, left on larger screens */}
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <AwardIcon className="w-5 h-5 text-blue-900" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title row with status */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-sm text-gray-500">Course Final Project</span>
              <div className="inline-flex border bg-green-100 rounded-full px-3 py-1 items-center">
                <span className="text-xs font-medium text-green-600">Published</span>
              </div>
            </div>
            
            {/* Title - responsive text size */}
            <h2 className="font-semibold text-gray-800 text-lg md:text-xl mb-2 break-words">{title}</h2>
            
            {/* Description */}
            <div className="max-w-xl">
              <p className="text-sm md:text-base text-gray-600 mb-4 break-words">{description}</p>
            </div>
            
            {/* Stats - wrap on mobile */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm mb-4">
              <div className="flex items-center space-x-1 text-gray-800">
                <BookCheck size={16} className="text-blue-800 flex-shrink-0" />
                <span>{submissions} Submissions</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-800">
                <AlertTriangle size={16} className="text-amber-600 flex-shrink-0" />
                <span>{pendingReviews} Pending Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons - full width on mobile, inline on desktop */}
        <div className="flex flex-row sm:flex-col lg:flex-row gap-2 sm:gap-3 flex-shrink-0">
          <button className="flex-1 sm:flex-initial flex items-center justify-center border border-gray-400 rounded-lg px-3 py-2.5 md:px-4 md:py-3 space-x-1 text-gray-600 hover:text-blue-700 text-sm transition-colors">
            <Eye size={16} />
            <span>View Project</span>
          </button>
          <button className="flex-1 sm:flex-initial flex items-center justify-center border border-gray-400 rounded-lg px-3 py-2.5 md:px-4 md:py-3 space-x-1 text-gray-600 hover:text-gray-700 text-sm transition-colors">
            <Edit size={16} />
            <span>Edit Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;