import React from 'react';
import IconBox from '../ui/IconBox';

const DepartmentCard = ({ department }) => {
  const { name, english, icon: Icon, color, description, lab, years } = department;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover-lift cursor-pointer group">
      <div className="flex flex-col items-center text-center">
        <IconBox Icon={Icon} color={color} className="mb-4 group-hover:bg-secondary-500 group-hover:text-white transition-all" />
        
        <h3 className="text-xl font-bold text-primary-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-3 font-english">{english}</p>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="mt-auto space-y-2">
          <div className="flex items-center text-sm text-primary-600">
            <i className="fas fa-flask mr-2"></i>
            <span>{lab}</span>
          </div>
          <div className="flex items-center text-sm text-secondary-600 font-semibold">
            <i className="fas fa-clock mr-2"></i>
            <span>{years}</span>
          </div>
        </div>
        
        <button className="mt-4 text-secondary-500 hover:text-secondary-600 font-semibold text-sm transition-colors">
          বিস্তারিত <i className="fas fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default DepartmentCard;