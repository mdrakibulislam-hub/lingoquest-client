import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeClassesSection from "../../Components/HomeClassesSection/HomeClassesSection";
import HomeInstructorSection from "../../Components/HomeInstructorSection/HomeInstructorSection";
import WhyToLearn from "../../Components/WhyToLearn/WhyToLearn";

const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <HomeClassesSection></HomeClassesSection>
            <HomeInstructorSection></HomeInstructorSection>
            <WhyToLearn></WhyToLearn>
        </>
    );
};

export default Home;