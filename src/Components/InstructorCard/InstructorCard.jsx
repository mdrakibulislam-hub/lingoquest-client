import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const InstructorCard = ({ data }) => {
    const { _id, image, title, name, email, totalStudents } = data;
    //useEffect
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" className="flex items-center gap-3 border border-secondary p-4 rounded-md">
            <figure className="w-1/4"><img className="rounded-md" src={image} alt="" /></figure>
            <div className="flex flex-col gap-1">
                <h1 className="font-playfair text-xl text-secondary font-semibold">{name}</h1>
                <p>Email: {email}</p>
                <p>Course: {title || "Not released"}</p>
                <Link to={`/instructor/${_id}`} className="btn btn-sm btn-secondary rounded normal-case">See Courses</Link>
            </div>
        </div>
    );
};

export default InstructorCard;