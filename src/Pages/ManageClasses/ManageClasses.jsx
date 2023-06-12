import { useContext, useEffect } from "react";
import ManageClassTableItem from "../../Components/ManageClassTableItem/ManageClassTableItem";
import useAllClasses from "../../Hooks/useAllClasses";
import useClasses from "../../Hooks/useClasses";
import { AuthContext } from "../../Provider/AuthProvider";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";



const ManageClasses = () => {

    useEffect(() => {
        document.title = "Manage Classes | Lingoquest"
    }, [])
    const { user, loading } = useContext(AuthContext);
    const classes = useAllClasses();
    console.log(classes);




    if (loading) {
        return (
            <div>
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }


    return (



        <div>
            <h1 className="text-3xl font-bold font-playfair text-neutral text-center mb-12">Manage Classes</h1>


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
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {classes.map((data, index) => <ManageClassTableItem data={data} key={data._id} index={index}></ManageClassTableItem>)}


                    </tbody>


                </table>
            </div>

        </div>

    );
};

export default ManageClasses;