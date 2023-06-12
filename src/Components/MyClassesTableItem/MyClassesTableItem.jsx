import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MyClassesTableItem = ({ data, index }) => {

    const [axiosSecure] = useAxiosSecure();
    const { _id, image, title, instructorName, instructorEmail, availableSeats, price, status, totalStudents, adminsFeedback } = data;
    const handleDelete = () => {
        axiosSecure.delete(`http://localhost:5000/allclasses/delete/${_id}`).then(data => {

            Swal.fire(
                'Deleted',
                'You class has been deleted!',
                'success'
            )
            window.location.reload()
        })
    }
    //useEffect
    useEffect(() => {
        AOS.init();
    }, [])
    return (

        <tr data-aos="fade-up" >
            <th>
                <label>
                    {index + 1}
                </label>
            </th>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Thumbnail of course" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">Instructor: {instructorName}</div>
                    </div>
                </div>
            </td>

            <td>
                <p>৳{price}</p>
            </td>

            <td className="">
                <p>{status}</p>
            </td>


            <td className="">
                <p>{adminsFeedback}</p>
            </td>


            <td className='flex gap-2 items-center justify-center'>

                <button onClick={handleDelete} className="btn btn-sm normal-case bg-red-400 text-white outline-none border-none hover:bg-red-500">Delete</button>

            </td>

        </tr>

    );
};

export default MyClassesTableItem;