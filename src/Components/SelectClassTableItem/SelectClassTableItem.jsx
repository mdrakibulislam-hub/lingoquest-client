import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const SelectClassTableItem = ({ data, index }) => {
    const {
        _id, courseId, title, image, price, email
    } = data

    const [axiosSecure] = useAxiosSecure();

    const handleDelete = () => {
        axiosSecure.delete(`http://localhost:5000/user/selectedclasses/${_id}`).then(data => {

            if (data.data.deletedCount > 0) {
                Swal.fire(
                    'Deleted!',
                    `You have deleted ${title} from your selected list`,
                    'success'
                )
            }
        })
    }

    return (
        <tr>
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
                    </div>
                </div>
            </td>
            <td>
                <p>৳{price}</p>
            </td>
            <td className='flex gap-2 items-center justify-center'>
                <button onClick={handleDelete} className="btn btn-sm bg-red-600 text-white outline-none border-none hover:bg-red-600">Delete</button>
                <button className="btn btn-sm btn-info">Payment</button>
            </td>

        </tr>
    );
};

export default SelectClassTableItem;