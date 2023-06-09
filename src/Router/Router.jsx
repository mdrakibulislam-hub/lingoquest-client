import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import InstructorProfile from "../Pages/InstructorProfile/InstructorProfile";
import Courses from "../Pages/Courses/Courses";
import Instructors from "../Pages/Instructors/instructors";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/instructor/:id", element: <InstructorProfile></InstructorProfile> },
            { path: "/courses", element: <Courses></Courses> },
            { path: "/instructors", element: <Instructors></Instructors> },
            { path: "/login", element: <Login></Login> },
            { path: "/registration", element: <Registration></Registration> },
            { path: "/forgetpassword", element: <ForgetPassword></ForgetPassword> },

        ]

    }
])

export default router;