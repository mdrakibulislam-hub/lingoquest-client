import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const [user, setUser] = useState([]);
    useEffect(() => {
        axiosSecure.get("https://b7a12-summer-camp-server-side-mdrak-rakibulislamborkan-gmailcom.vercel.app/user").then(response => setUser(response.data))
    }, [])

    return user;
};

export default useUsers;