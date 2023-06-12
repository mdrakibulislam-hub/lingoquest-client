import EnrolledListItem from "../../Components/EnrolledListItem/EnrolledListItem";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import usePaidClass from "../../Hooks/usePaidClass";

const EnrolledCourses = () => {
    const [courses, loading] = usePaidClass();
    console.log(courses);

    if (loading) {
        return (
            <div>
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }

    return (
        <div>
            <h1>enrolled courses</h1>

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
                            <th className="text-center">Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {courses.map((data, index) => <EnrolledListItem data={data} key={data._id} index={index}></EnrolledListItem>)}

                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default EnrolledCourses;