import { useEffect } from "react";

const EditProfile = () => {
    useEffect(() => {
        document.title = "Edit Profile | Lingoquest"
    }, [])
    return (
        <div>
            <h1>EditProfile</h1>
        </div>
    );
};

export default EditProfile;