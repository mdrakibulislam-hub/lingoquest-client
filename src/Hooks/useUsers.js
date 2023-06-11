import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {


    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/user").then(response => setUser(response.data))
    }, [])

    return user;
};

export default useUsers;