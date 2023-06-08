import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import InstructorProfile from "../Pages/InstructorProfile/InstructorProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/instructor/:id", element: <InstructorProfile></InstructorProfile> }
        ]

    }
])

export default router;