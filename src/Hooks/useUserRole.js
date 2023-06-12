import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [role, setRole] = useState(null);

    useEffect(() => {
        axiosSecure.get(`/users/role/${user?.email}`).then(data => setRole(data.data))
    }, [user])

    return [role, loading];
};

export default useUserRole;