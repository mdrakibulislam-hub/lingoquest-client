import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='main-container min-h-[calc(100vh-256px)] grid place-content-center'>
            <div className='flex gap-2 items-center'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-primary"></div>
                <p className='font-medium text-4xl'>Loading...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;