import useInstructor from "../../Hooks/useInstructor";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import InstructorCard from "../InstructorCard/InstructorCard";

const HomeInstructorSection = () => {

    const instructors = useInstructor().slice(0, 6);

    return (
        <div className="main-container my-16">
            <HeadingTitle>Our Hero Instructors</HeadingTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructors.map((data) => <InstructorCard key={data._id} data={data}></InstructorCard>)}
            </div>
        </div>
    );
};

export default HomeInstructorSection;