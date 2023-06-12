import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {

    const [classes, setClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const [control, setControl] = useState(true);
    useEffect(() => {
        axiosSecure('https://b7a12-summer-camp-server-side-mdrak-rakibulislamborkan-gmailcom.vercel.app/allclassesforadmin').then(response => setClasses(response.data))
    }, [control, axiosSecure])

    return [classes, control, setControl];
};

export default useAllClasses;