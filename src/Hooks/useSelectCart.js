import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useSelectCart = () => {

    const { user, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`https://b7a12-summer-camp-server-side-mdrak-rakibulislamborkan-gmailcom.vercel.app/user/selectedclasses/${user?.email}`).then(data => setCourses(data.data))
    }, [user])

    return [courses, loading];

};

export default useSelectCart;