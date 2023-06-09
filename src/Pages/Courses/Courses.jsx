import ClassCard from "../../Components/ClassCard/ClassCard";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import useClasses from "../../Hooks/useClasses";

const Courses = () => {

    const classes = useClasses().slice();

    return (
        <div className="main-container my-16">
            <HeadingTitle>Courses By LingoQuest</HeadingTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 my-4 gap-6">
                {classes.map(data => <ClassCard key={data._id} data={data}></ClassCard>)}
            </div>
        </div>
    );
};

export default Courses;