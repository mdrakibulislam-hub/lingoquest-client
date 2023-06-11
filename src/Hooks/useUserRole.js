import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useUserRole = () => {
    const { user, loading } = useContext(AuthContext);
    const [role, setRole] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/users/role/${user?.email}`).then(data => setRole(data.data))
    }, [user])

    return [role, loading];
};

export default useUserRole;