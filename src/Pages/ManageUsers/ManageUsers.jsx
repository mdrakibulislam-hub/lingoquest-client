import ManageUserTableItem from "../../Components/ManageUserTableItem/ManageUserTableItem";
import useUsers from "../../Hooks/useUsers";

const ManageUsers = () => {
    const user = useUsers();
    console.log(user);
    return (
        <div>
            <h1 className="text-3xl font-bold font-playfair text-neutral text-center mb-12">Manage Users</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th >Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {user.map((data, index) => <ManageUserTableItem data={data} key={data._id} index={index}></ManageUserTableItem>)}

                    </tbody>


                </table>
            </div>



        </div>
    );
};

export default ManageUsers;