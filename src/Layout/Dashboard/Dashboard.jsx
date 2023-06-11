import { Link, Outlet } from 'react-router-dom';
import { FaBook, FaBookmark, FaBookReader, FaUserCog, FaEdit, FaHome, FaUser } from 'react-icons/fa';
import { MdOutlineAddCircle } from 'react-icons/md';
import useUserRole from '../../Hooks/useUserRole';

const Dashboard = () => {
    const [role, loading] = useUserRole();
    return (
        <>

            <div className='main-container my-16'>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col mx-16">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button normal-case lg:hidden">Open drawer</label>
                        {/* contents here */}
                        <Outlet></Outlet>

                    </div>
                    <div className="bg-primary drawer-side rounded-xl z-20">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu sticky p-4 w-80 h-full bg-primary text-base-content">
                            <h1 className='text-3xl font-playfair font-semibold mt-3 mb-6 mx-2'>Welcome to Dashboard</h1>
                            {/* Sidebar content here */}
                            <li><Link to={"/dashboard"}><FaHome></FaHome> Home</Link></li>
                            <li><Link to={"/dashboard/editprofile"}><FaUser></FaUser> Edit Profile</Link></li>


                            {role == "user" && <>
                                {/* regurler user options */}
                                <div className="divider"></div>
                                <li><Link to={"/dashboard/selectedcourses"}><FaBook></FaBook> Selected courses</Link></li>
                                <li><Link to={"/dashboard/enrolledcourses"}><FaBookReader></FaBookReader> Enorlled courses</Link></li>
                            </>}


                            {role == "instructor" && <>
                                {/* Instructor options */}
                                <div className="divider"></div>
                                <li><Link to={"/dashboard/addclasses"}><MdOutlineAddCircle></MdOutlineAddCircle> Add a class</Link></li>
                                <li><Link to={"/dashboard/myclasses"}><FaBookmark></FaBookmark> My classes</Link></li>
                            </>}


                            {role == "admin" && <>
                                {/* admin options */}
                                <div className="divider"></div>
                                <li><Link to={"/dashboard/manageclasses"}><FaEdit></FaEdit>Manage classes</Link></li>
                                <li><Link to={"/dashboard/manageusers"}><FaUserCog></FaUserCog> Manage users</Link></li>
                            </>}

                        </ul>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;