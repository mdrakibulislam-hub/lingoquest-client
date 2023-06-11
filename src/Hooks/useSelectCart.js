import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useSelectCart = () => {

    const { user, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/user/selectedclasses/${user?.email}`).then(data => setCourses(data.data))
    }, [user])

    return [courses, loading];

};

export default useSelectCart;