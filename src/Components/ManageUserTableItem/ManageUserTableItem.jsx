import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const ManageUserTableItem = ({ data, index }) => {
    const { _id, name, email, role } = data;


    const handleMakeAdmin = () => {
        axios.patch(`http://localhost:5000/updaterole/admin/${_id}`).then(data => { console.log(data.data); })
    }


    const handleMakeInstructor = () => {
        axios.patch(`http://localhost:5000/updaterole/instructor/${_id}`).then(data => { console.log(data.data); })
    }



    return (

        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>

            <td>
                <p className="font-bold">{name}</p>
            </td>

            <td>
                <p>{email}</p>
            </td>

            <td className="">
                <p>{role}</p>
            </td>


            <td className='flex gap-2 items-center justify-center'>
                <button onClick={handleMakeInstructor} className="btn btn-sm normal-case btn-info">Make Instructor</button>
                <button onClick={handleMakeAdmin} className="btn btn-sm normal-case btn-accent text-white hover:text-white">Make Admin</button>
            </td>

        </tr>

    );
};

export default ManageUserTableItem;