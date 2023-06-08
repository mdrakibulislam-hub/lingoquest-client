import axios from "axios";
import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/instructors").then(response => setInstructor(response.data))
    }, [])

    return instructor;
};

export default useInstructor;