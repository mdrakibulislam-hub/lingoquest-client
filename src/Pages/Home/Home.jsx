import { useEffect } from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeClassesSection from "../../Components/HomeClassesSection/HomeClassesSection";
import HomeInstructorSection from "../../Components/HomeInstructorSection/HomeInstructorSection";
import HomePosterImage from "../../Components/HomePosterImage/HomePosterImage";
import WhyToLearn from "../../Components/WhyToLearn/WhyToLearn";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Lingoquest"
    }, [])
    return (
        <>
            <HomeBanner></HomeBanner>
            <HomePosterImage></HomePosterImage>
            <HomeClassesSection></HomeClassesSection>
            <HomeInstructorSection></HomeInstructorSection>
            <WhyToLearn></WhyToLearn>
        </>
    );
};

export default Home;