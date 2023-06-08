import axios from "axios";
import { useEffect, useState } from "react";

const useClasses = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/allclasses').then(response => setClasses(response.data))
    }, [])

    return classes;
};

export default useClasses;