import React from 'react';

const HeadingTitle = ({ children }) => {
    return (
        <div className="flex items-center my-8">
            <div className="h-px bg-secondary w-full"></div>
            <h2 className="text-secondary text-3xl font-bold font-playfair text-center w-[50rem]">{children}</h2>
            <div className="h-px bg-secondary w-full"></div>
        </div>
    );
};

export default HeadingTitle;