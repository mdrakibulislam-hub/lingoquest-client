import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useUserRole from '../../Hooks/useUserRole';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ClassCard = ({ data }) => {
    const { _id, image, title, instructorName, instructorEmail, availableSeats, price, status, totalStudents, adminsFeedback } = data;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const [role, loading] = useUserRole();
    const handleSelect = () => {
        if (user && user.email) {
            const cartItem = { courseId: _id, title, image, price, email: user.email }
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added to selected class, please visit your dashboard.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You must have to login first to select any class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className='flex flex-col gap-3 bg-primary p-4 rounded-lg'>
            <figure><img className='w-full rounded-md' src={image} alt="" /></figure>
            <h1 className='text-2xl font-bold font-playfair text-secondary'>{title}</h1>
            <p>Instructor: {instructorName}</p>
            <p>Seats available: {availableSeats}</p>
            <p>Fee: ৳{price}</p>
            <button disabled={role !== "user" && true} onClick={handleSelect} className='btn btn-secondary normal-case'>Select</button>
        </div >
    );
};

export default ClassCard;