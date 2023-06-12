import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import MyClassesTableItem from "../../Components/MyClassesTableItem/MyClassesTableItem";


const MyClasses = () => {

    const { user, loading } = useContext(AuthContext);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/classes/all/instructor/${user?.email}`).then(data => { setClasses(data.data) })
    }, [user])

    console.log(classes);

    if (loading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <h1 className="text-3xl font-bold font-playfair text-neutral text-center mb-12">My classes</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Title</th>
                            <th>Price</th>
                            <th >Status</th>
                            <th >Feedback</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {classes.map((data, index) => <MyClassesTableItem data={data} key={data._id} index={index}></MyClassesTableItem>)}

                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default MyClasses;