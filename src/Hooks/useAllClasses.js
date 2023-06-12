import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {

    const [classes, setClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const [control, setControl] = useState(true);
    useEffect(() => {
        axiosSecure('http://localhost:5000/allclassesforadmin').then(response => setClasses(response.data))
    }, [control, axiosSecure])

    return [classes, control, setControl];
};

export default useAllClasses;