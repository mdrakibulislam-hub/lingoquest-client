
const ManageClassTableItem = ({ data, index }) => {
    const { _id, image, title, instructorName, instructorEmail, availableSeats, price, status, totalStudents, adminsFeedback } = data;
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
                <button className="btn btn-sm normal-case btn-info">Approve</button>
                <button className="btn btn-sm normal-case bg-red-400 text-white outline-none border-none hover:bg-red-500">Reject</button>
                <button className="btn btn-sm normal-case bg-accent text-white outline-none border-none hover:bg-green-600">Send Feedback</button>
            </td>

        </tr>
    );
};

export default ManageClassTableItem;