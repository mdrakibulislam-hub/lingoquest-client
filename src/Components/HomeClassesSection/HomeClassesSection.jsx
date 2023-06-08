import { useEffect } from "react";
import useClasses from "../../Hooks/useClasses";
import ClassCard from "../ClassCard/ClassCard";

const HomeClassesSection = () => {


    const classes = useClasses().slice(0, 6);
    console.log(classes);

    return (
        <div className="my-6 main-container">
            <div className="flex items-center">
                <div className="h-px bg-secondary w-full"></div>
                <h2 className="text-secondary text-3xl font-bold text-center w-[40rem]">Popular Classes</h2>
                <div className="h-px bg-secondary w-full"></div>
            </div>

            <div className="grid grid-cols-4 my-4 gap-6">
                {classes.map(data => <ClassCard key={data._id} data={data}></ClassCard>)}
            </div>
        </div>
    );
};

export default HomeClassesSection;