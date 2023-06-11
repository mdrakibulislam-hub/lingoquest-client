import { useContext } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import useUserRole from "../../Hooks/useUserRole";
import { AuthContext } from "../../Provider/AuthProvider";

const DashboardHome = () => {
    const [role, loading] = useUserRole();
    const { user } = useContext(AuthContext);
    console.log(role, loading);
    if (loading) {
        return (
            <div>
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }
    else if (role == "user") {
        return (
            <div>
                <img className="rounded-full mx-auto" src={user?.photoURL} alt="" />
                <h1 className="text-neutral text-3xl font-bold font-playfair">Howdy, {role}</h1>
                <p>Welcome to LingoQuest</p>
            </div>
        );
    } else if (role == "instructor") {
        return (
            <div>
                <img className="rounded-full mx-auto" src={user?.photoURL} alt="" />
                <h1 className="text-neutral text-3xl font-bold font-playfair">Howdy, {role}</h1>
                <p>Welcome to LingoQuest</p>
            </div>
        );
    }
    else if (role == "admin") {
        return (
            <div>
                <img className="rounded-full mx-auto" src={user?.photoURL} alt="" />
                <h1 className="text-neutral text-3xl font-bold font-playfair">Howdy, {role}</h1>
                <p>Welcome to LingoQuest</p>
            </div>
        );
    }

};

export default DashboardHome;