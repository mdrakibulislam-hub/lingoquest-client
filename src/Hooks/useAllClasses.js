import axios from "axios";
import { useEffect, useState } from "react";

const useAllClasses = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/allclassesforadmin').then(response => setClasses(response.data))
    }, [])

    return classes;
};

export default useAllClasses;