import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {

    const [classes, setClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure('https://b7a12-summer-camp-server-side-mdrak-rakibulislamborkan-gmailcom.vercel.app/allclasses').then(response => setClasses(response.data))
    }, [])

    return classes;
};

export default useClasses;