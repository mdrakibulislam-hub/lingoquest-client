import poster from "../../assets/images/poster.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const HomePosterImage = () => {

    //useEffect
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="fade-up" className="main-container my-16">
            <img className="rounded-xl" src={poster} alt="" />
        </div>
    );
};

export default HomePosterImage;