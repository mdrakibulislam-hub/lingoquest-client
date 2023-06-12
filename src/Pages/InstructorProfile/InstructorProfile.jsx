import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import ClassCard from "../../Components/ClassCard/ClassCard";

const InstructorProfile = () => {

    const { id } = useParams();
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        axios(`https://lingoquest-server-api.vercel.app/instructor/${id}`).then(data => setInstructor(data.data))
    }, [id]);

    const { _id, image, title, name, email, totalStudents } = instructor;

    const [classes, setClasses] = useState([]);
    useEffect(() => { axios(`https://lingoquest-server-api.vercel.app/allclasses/${email}`).then(data => setClasses(data.data)) }, [email]);

    console.log(classes);

    return (
        <div className="main-container">

            <div className="my-16 flex gap-6 items-center bg-primary rounded-lg">
                <figure><img className="rounded-lg" src={image} alt="" /></figure>
                <div>
                    <h1 className="font-bold text-4xl font-playfair text-neutral">{name}</h1>
                    <p>Email: {email}</p>
                    <p>Total Students: {totalStudents}</p>
                </div>
            </div>

            <HeadingTitle>Classes by {name}</HeadingTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 my-4 gap-6">
                {classes.map(data => <ClassCard key={data._id} data={data}></ClassCard>)}
            </div>

        </div>
    );
};

export default InstructorProfile;