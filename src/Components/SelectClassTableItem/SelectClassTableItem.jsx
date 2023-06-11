import React from 'react';

const SelectClassTableItem = ({ data, index }) => {
    const {
        _id, courseId, title, image, price, email
    } = data
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
                            <img src={image} alt="Avatar Tailwind CSS Component" />
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
            <td className='flex gap-2'>
                <button className="btn btn-sm bg-red-600 text-white outline-none border-none hover:text-black">Delete</button>
                <button className="btn btn-sm btn-info">Pay</button>
            </td>

        </tr>
    );
};

export default SelectClassTableItem;