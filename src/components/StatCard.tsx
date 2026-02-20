import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  iconBgColor = 'bg-blue-100',
  iconColor = 'text-blue-600',
  className = ''
}) => {
  return (
    <div className={`shadow-xl hover:shadow-md transition-shadow bg-white p-6 rounded-xl ${className}`}>
      <div className="flex items-start flex-start">
        {Icon && (
          <div className={`w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center mt-3`}>
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
        )}
        <div className='ml-3'>
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
          <p className="text-sm text-gray-500 mt-1">{title}</p>
        </div>

      </div>
    </div>
  );
};

export default StatCard;