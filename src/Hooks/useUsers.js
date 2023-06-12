import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const [user, setUser] = useState([]);
    useEffect(() => {
        axiosSecure.get("/user").then(response => setUser(response.data))
    }, [])

    return user;
};

export default useUsers;