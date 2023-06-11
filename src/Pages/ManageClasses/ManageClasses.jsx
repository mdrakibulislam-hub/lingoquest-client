import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import ManageClassTableItem from "../../Components/ManageClassTableItem/ManageClassTableItem";
import useAllClasses from "../../Hooks/useAllClasses";
import useClasses from "../../Hooks/useClasses";

const ManageClasses = () => {
    const classes = useAllClasses();
    console.log(classes);
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