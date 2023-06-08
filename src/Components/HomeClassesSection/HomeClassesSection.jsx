import { useEffect } from "react";
import useClasses from "../../Hooks/useClasses";
import ClassCard from "../ClassCard/ClassCard";
import HeadingTitle from "../HeadingTitle/HeadingTitle";

const HomeClassesSection = () => {


    const classes = useClasses().slice();
    console.log(classes);

    return (
        <div className=" main-container my-16">
            <HeadingTitle>Popular Classes</HeadingTitle>

            <div className="grid grid-cols-4 my-4 gap-6">
                {classes.map(data => <ClassCard key={data._id} data={data}></ClassCard>)}
            </div>
        </div>
    );
};

export default HomeClassesSection;