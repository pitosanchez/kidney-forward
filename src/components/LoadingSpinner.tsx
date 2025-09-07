import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="relative">
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-primary-600"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary-600 font-semibold">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;