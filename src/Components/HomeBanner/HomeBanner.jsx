import { Typewriter } from 'react-simple-typewriter'
import Lottie from 'react-lottie';
import languagesAnimation from '../../assets/lottie-animations/languages.json';

const HomeBanner = () => {


    const handleType = (count) => {
        // access word count number
        // console.log(count)
    }


    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }




    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: languagesAnimation,

    };

    return (
        <div className='bg-neutral py-4'>
            <div className="main-container flex items-center justify-center">
                <div className='banner-left flex-grow'>

                    <div className='flex flex-col gap-4'>

                        <h1 className='m-0 font-normal text-white text-4xl w-3/4'>
                            Learning new languages is{' '}
                            <br></br>
                            <span className='font-bold text-primary font-serif'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['exhilarating', 'transformative', 'empowering', 'enriching!', 'fascinating', 'adventurous', 'mind-expanding', 'captivating']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                    onType={handleType}
                                />
                            </span>
                        </h1>

                        <p className='text-white'>"Language is the roadmap of a culture. It tells you where its people have been and where they are going." <br /> - Rita Mae Brown</p>

                        <button className='btn btn-primary w-fit normal-case'>Explore Classes</button>

                    </div>


                </div>
                <div className='banner-right'>
                    <Lottie options={defaultOptions}
                        height={500}
                        width={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;