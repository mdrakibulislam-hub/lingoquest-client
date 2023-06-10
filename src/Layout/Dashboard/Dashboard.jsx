import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer';

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
                            {/* Sidebar content here */}
                            {/* regurler user options */}
                            <li><Link>Selected courses</Link></li>
                            <li><Link>Enorlled courses</Link></li>
                            {/* Instructor options */}
                            <div className="divider"></div>
                            <li><Link>Add a class</Link></li>
                            <li><Link>My classes</Link></li>
                            {/* Instructor options */}
                            <div className="divider"></div>
                            <li><Link>Manage classes</Link></li>
                            <li><Link>Manage users</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;