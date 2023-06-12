import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get("https://b7a12-summer-camp-server-side-mdrak-rakibulislamborkan-gmailcom.vercel.app/instructors").then(response => setInstructor(response.data))
    }, [])

    return instructor;
};

export default useInstructor;