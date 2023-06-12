import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get("http://localhost:5000/instructors").then(response => setInstructor(response.data))
    }, [])

    return instructor;
};

export default useInstructor;