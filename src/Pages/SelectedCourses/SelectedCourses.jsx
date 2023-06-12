import { useEffect } from "react";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import SelectClassTableItem from "../../Components/SelectClassTableItem/SelectClassTableItem";
import useSelectCart from "../../Hooks/useSelectCart";

const SelectedCourses = () => {

    useEffect(() => {
        document.title = "Selected Class | Lingoquest"
    }, [])
    const [courses, loading] = useSelectCart();
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



            <h1 className="text-3xl font-bold font-playfair text-neutral text-center mb-12">Selected Courses</h1>




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
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {courses.map((data, index) => <SelectClassTableItem data={data} key={data._id} index={index}></SelectClassTableItem>)}

                    </tbody>


                </table>
            </div>







        </div>
    );
};

export default SelectedCourses;