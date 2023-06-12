import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ManageUserTableItem = ({ data, index }) => {
    const { _id, name, image, email, role } = data;
    console.log(data);
    const [axiosSecure] = useAxiosSecure();

    const handleMakeAdmin = () => {
        axiosSecure.patch(`https://b7a12-summer-camp-server-side-mdrak-rakibulislamborkan-gmailcom.vercel.app/updaterole/admin/${_id}`).then(data => { console.log(data.data); window.location.reload() })
    }


    const handleMakeInstructor = () => {
        axiosSecure.patch(`https://b7a12-summer-camp-server-side-mdrak-rakibulislamborkan-gmailcom.vercel.app/updaterole/instructor/${_id}`).then(data => {
            if (data.data.modifiedCount > 0) {
                const instructorData = {
                    image, name, email, totalStudents: 0, title: null
                }
                axiosSecure.post('https://b7a12-summer-camp-server-side-mdrak-rakibulislamborkan-gmailcom.vercel.app/instructor', (instructorData)).then(data => { console.log(data.data); })
            } else {
                console.log(data.data);
                window.location.reload()
            }
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