import axios from "axios";
import FeedBackModal from "../FeedBackModal/FeedBackModal";

const ManageClassTableItem = ({ data, index }) => {
    const { _id, image, title, instructorName, instructorEmail, availableSeats, price, status, totalStudents, adminsFeedback } = data;


    const handleClassReject = () => {
        console.log(_id);
        axios.patch(`http://localhost:5000/classes/reject/${_id}`).then(data => { console.log(data.data); })
    }

    const handleClassApproved = () => {
        axios.patch(`http://localhost:5000/classes/approved/${_id}`).then(data => { console.log(data.data); })
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


            <td className='flex gap-2 items-center justify-center'>
                <button onClick={handleClassApproved} className="btn btn-sm normal-case btn-info">Approve</button>
                <button onClick={handleClassReject} className="btn btn-sm normal-case bg-red-400 text-white outline-none border-none hover:bg-red-500">Reject</button>
                <label htmlFor={_id} className="btn btn-sm normal-case bg-accent text-white outline-none border-none hover:bg-green-600">Send Feedback</label>
            </td>

            <FeedBackModal id={_id}></FeedBackModal>

        </tr>
    );
};

export default ManageClassTableItem;