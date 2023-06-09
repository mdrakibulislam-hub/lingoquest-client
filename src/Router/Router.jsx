import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import InstructorProfile from "../Pages/InstructorProfile/InstructorProfile";
import Courses from "../Pages/Courses/Courses";
import Instructors from "../Pages/Instructors/instructors";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/instructor/:id", element: <InstructorProfile></InstructorProfile> },
            { path: "/courses", element: <Courses></Courses> },
            { path: "instructors", element: <Instructors></Instructors> }

        ]

    }
])

export default router;