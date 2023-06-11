import useUserRole from "../../Hooks/useUserRole";

const DashboardHome = () => {
    const [role, loading] = useUserRole();
    console.log(role, loading);
    if (role == "user") {
        return (
            <div>
                <h1>Howdy, user</h1>
            </div>
        );
    } else if (role == "instructor") {
        return (
            <div>
                <h1>Howdy, instructor</h1>
            </div>
        );
    }
    else if (role == "admin") {
        return (
            <div>
                <h1>Howdy, Admin</h1>
            </div>
        );
    }

};

export default DashboardHome;