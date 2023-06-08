import useInstructor from "../../Hooks/useInstructor";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import InstructorCard from "../InstructorCard/InstructorCard";

const HomeInstructorSection = () => {

    const instructors = useInstructor();

    return (
        <div className="main-container my-16">
            <HeadingTitle>Our Hero Instructors</HeadingTitle>
            <div className="grid grid-cols-3 gap-6">
                {instructors.map((data) => <InstructorCard key={data._id} data={data}></InstructorCard>)}
            </div>
        </div>
    );
};

export default HomeInstructorSection;