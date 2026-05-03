import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', icon: Icon, className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5';
  
  const variants = {
    primary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-400 hover:to-secondary-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-primary-800 border-2 border-primary-800 hover:bg-primary-800 hover:text-white',
    outline: 'border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {Icon && <Icon className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;