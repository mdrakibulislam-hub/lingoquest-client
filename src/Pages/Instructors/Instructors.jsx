import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import InstructorCard from "../../Components/InstructorCard/InstructorCard";
import useInstructor from "../../Hooks/useInstructor";

const Instructors = () => {

    const instructors = useInstructor();

    return (
        <div className="main-container my-16">
            <HeadingTitle>Our Hero Instructors</HeadingTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructors.map((data) => <InstructorCard key={data._id} data={data}></InstructorCard>)}
            </div>
        </div>
    );
};

export default Instructors;