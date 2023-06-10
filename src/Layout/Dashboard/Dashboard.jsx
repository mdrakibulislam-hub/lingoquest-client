import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer';
import { FaBook, FaBookmark, FaBookReader, FaUserCog, FaEdit } from 'react-icons/fa';
import { MdOutlineAddCircle } from 'react-icons/md';

const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='main-container my-16'>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button normal-case lg:hidden">Open drawer</label>
                        <h1>haaaaaaaaaaaaaaaaaaaaa haaaaaaaaaaaaaaaa haaaaaaaaaa</h1>

                    </div>
                    <div className="bg-primary drawer-side rounded-xl z-20">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-primary text-base-content">
                            <h1 className='text-3xl font-playfair font-semibold mt-3 mb-6 mx-2'>Welcome to Dashboard</h1>
                            {/* Sidebar content here */}
                            {/* regurler user options */}
                            <li><Link><FaBook></FaBook> Selected courses</Link></li>
                            <li><Link><FaBookReader></FaBookReader> Enorlled courses</Link></li>
                            {/* Instructor options */}
                            <div className="divider"></div>
                            <li><Link><MdOutlineAddCircle></MdOutlineAddCircle> Add a class</Link></li>
                            <li><Link><FaBookmark></FaBookmark> My classes</Link></li>
                            {/* Instructor options */}
                            <div className="divider"></div>
                            <li><Link><FaEdit></FaEdit>Manage classes</Link></li>
                            <li><Link><FaUserCog></FaUserCog> Manage users</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;