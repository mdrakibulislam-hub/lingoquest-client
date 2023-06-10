import React from 'react';

const ClassCard = ({ data }) => {
    const { _id, image, title, instructorName, instructorEmail, availableSeats, price, status, totalStudents, adminsFeedback } = data
    return (
        <div className='flex flex-col gap-3 bg-primary p-4 rounded-lg'>
            <figure><img className='w-full rounded-md' src={image} alt="" /></figure>
            <h1 className='text-2xl font-bold font-playfair text-secondary'>{title}</h1>
            <p>Instructor: {instructorName}</p>
            <p>Seats available: {availableSeats}</p>
            <p>Fee: ৳{price}</p>
            <button className='btn btn-secondary normal-case'>Select</button>
        </div>
    );
};

export default ClassCard;