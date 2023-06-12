import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const usePaidClass = () => {

    const { user, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/user/paidclasses/${user?.email}`).then(data => setCourses(data.data))
    }, [user])

    return [courses, loading];


};

export default usePaidClass;