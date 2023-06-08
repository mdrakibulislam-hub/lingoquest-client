import { useParams } from "react-router-dom";

const InstructorProfile = () => {

    const { id } = useParams();

    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default InstructorProfile;