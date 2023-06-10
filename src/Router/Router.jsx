import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import InstructorProfile from "../Pages/InstructorProfile/InstructorProfile";
import Courses from "../Pages/Courses/Courses";
import Instructors from "../Pages/Instructors/instructors";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import SelectedCourses from "../Pages/SelectedCourses/SelectedCourses";
import EnrolledCourses from "../Pages/EnrolledCourses/EnrolledCourses";
import AddClasses from "../Pages/AddClasses/AddClasses";
import MyClasses from "../Pages/MyClasses/MyClasses";
import ManageClasses from "../Pages/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import EditProfile from "../Pages/EditProfile/EditProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/instructor/:id", element: <PrivetRoute><InstructorProfile></InstructorProfile></PrivetRoute> },
            { path: "/courses", element: <Courses></Courses> },
            { path: "/instructors", element: <Instructors></Instructors> },
            { path: "/login", element: <Login></Login> },
            { path: "/registration", element: <Registration></Registration> },
            { path: "/forgetpassword", element: <ForgetPassword></ForgetPassword> },
            {
                path: "/dashboard", element: <Dashboard></Dashboard>, children: [
                    { path: "/dashboard", element: <DashboardHome></DashboardHome> },
                    { path: "/dashboard/selectedcourses", element: <SelectedCourses></SelectedCourses> },
                    { path: "/dashboard/enrolledcourses", element: <EnrolledCourses></EnrolledCourses> },
                    { path: "/dashboard/addclasses", element: <AddClasses></AddClasses> },
                    { path: "/dashboard/myclasses", element: <MyClasses></MyClasses> },
                    { path: "/dashboard/manageclasses", element: <ManageClasses></ManageClasses> },
                    { path: "/dashboard/manageusers", element: <ManageUsers></ManageUsers> },
                    { path: "/dashboard/editprofile", element: <EditProfile></EditProfile> },
                ]
            },
        ]

    },

])

export default router;