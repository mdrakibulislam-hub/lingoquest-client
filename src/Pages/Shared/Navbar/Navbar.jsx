import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.svg"

const Navbar = () => {


    const menuItem = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/courses"}>Courses</Link></li>
        <li><Link to={"/instructors"}>Instructors</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Login</Link></li>
        <li><Link>Signup</Link></li>
    </>

    return (
        <div className="bg-primary">
            <div className="main-container navbar bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
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
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;