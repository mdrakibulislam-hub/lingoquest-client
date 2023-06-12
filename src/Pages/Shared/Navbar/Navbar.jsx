import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

    const { handleLogout, user, setUser } = useContext(AuthContext);

    const handleLogoutButton = () => {
        handleLogout().then(() => console.log("logggggggggged out", user)).catch(error => console.log("error is", error))
    }

    const menuItem = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/courses"}>Courses</Link></li>
        <li><Link to={"/instructors"}>Instructors</Link></li>
        <li><Link to={"/dashboard"}>Dashboard</Link></li>
        {/* <li><Link to={"/login"}>Login</Link></li> */}
        {user && <li className="tooltip hidden lg:block tooltip-bottom" data-tip={user.displayName}>{user.photoURL ? <Link><figure className='w-14 h-fit'><img className='w-full rounded-full' src={user.photoURL && user.photoURL} alt="" /></figure></Link> : <Link><figure className='w-14 h-fit'><img className='w-full rounded-full' src="https://i.ibb.co/K798Km5/user.jpg" alt="" /></figure></Link>}</li>}
        {user ?
            <li className="" onClick={handleLogoutButton}><Link
            >
                Logout
            </Link></li>
            :

            <><li><Link

                to="/login"
                className=""
            >
                Login
            </Link></li>
                <li><Link to={"/registration"}>Signup</Link></li></>


        }
    </>

    return (
        <div className="bg-primary">
            <div className="main-container navbar bg-primary">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#000"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to={"/"}><img className="w-40" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {menuItem}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;