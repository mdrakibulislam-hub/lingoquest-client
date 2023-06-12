import axios from "axios";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useAllClasses = () => {

    const [classes, setClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    useEffect(() => {
        axiosSecure('/allclassesforadmin').then(response => setClasses(response.data))
    }, [axiosSecure])

    return classes;
};

export default useAllClasses;