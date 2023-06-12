import React from 'react';


const EnrolledListItem = ({ data, index }) => {
    const {
        _id, courseId, title, image, price, email, payment
    } = data

    return (
        <tr  >
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
                <button className="btn btn-sm bg-green-600 text-white outline-none border-none hover:bg-red-600">{payment}</button>
            </td>

        </tr>
    );
};

export default EnrolledListItem;