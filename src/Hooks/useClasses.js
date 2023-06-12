import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {

    const [classes, setClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure('/allclasses').then(response => setClasses(response.data))
    }, [])

    return classes;
};

export default useClasses;