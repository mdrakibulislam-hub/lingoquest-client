import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='main-container min-h-[calc(100vh-256px)] grid place-content-center'>
            <div className='flex gap-2 items-center'>
                <span className="loading loading-ring loading-lg"></span>
                <p className='font-medium text-4xl'>Loading...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;