import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {

    const [classes, setClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure('http://localhost:5000/allclasses').then(response => setClasses(response.data))
    }, [])

    return classes;
};

export default useClasses;