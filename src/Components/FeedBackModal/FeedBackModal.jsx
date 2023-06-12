import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const FeedBackModal = ({ id }) => {
    const [axiosSecure] = useAxiosSecure();
    const feedback = useRef('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const userFeedback = feedback.current.value
        console.log(userFeedback);
        axiosSecure.patch(`https://b7a12-summer-camp-server-side-mdrak-rakibulislamborkan-gmailcom.vercel.app/sendfeedback/class/${id}`, { userFeedback }).then(data => {
            console.log(data.data);
            Swal.fire(
                'Feedback Sent',
                'Your feedback has been sent to the instructor',
                'success'
            )
        })
    }


    return (
        <>
            {/* modal body */}
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-2xl font-bold mb-4 font-playfair">Give feedback to instructor</h3>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4' action="">
                        <textarea ref={feedback} className='rounded-md p-3 bg-gray-100 text-base outline-none focus:shadow-inner' name="" id="" cols="20" rows="10" placeholder='Please write down your feedback here...'></textarea>
                        <button type='submit' className="btn btn-secondary normal-case">Send</button>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor={id}>Close</label>
            </div>
        </>
    );
};

export default FeedBackModal;