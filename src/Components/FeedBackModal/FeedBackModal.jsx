import React from 'react';

const FeedBackModal = ({ id }) => {
    return (
        <>
            {/* modal body */}
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Give feedback to instructor</h3>
                    <p className="py-4">{id}</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button className="btn">Send</button>
                </div>
                <label className="modal-backdrop" htmlFor={id}>Close</label>
            </div>
        </>
    );
};

export default FeedBackModal;