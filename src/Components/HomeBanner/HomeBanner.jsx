import { Typewriter } from 'react-simple-typewriter'
import { FaSearch } from "react-icons/fa";

const HomeBanner = () => {

    // :::::::::react simple type writer::::::::::
    const handleType = (count) => {
        // access word count number
        // console.log(count)
    }
    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }




    return (
        <div className='bg-neutral py-16'>
            <div className="main-container flex items-center justify-center">
                <div className='banner-left flex-grow'>

                    <div className='flex flex-col gap-4'>

                        <h1 className='m-0 font-normal text-white text-4xl w-3/4'>
                            Learning new languages is{' '}
                            <br></br>
                            <span className='font-bold text-primary font-playfair'>
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

                        <p className='text-white'>&quot; Language is the roadmap of a culture. It tells you where its people have been and where they are going.&quot; <br /> - Rita Mae Brown</p>

                        <form action="" className='relative flex items-center w-fit'>
                            <input className='py-2 px-3 rounded-md w-full outline-none focus:shadow-xl' type="text" placeholder='Search' name="search" />
                            <button className='absolute right-3 text-neutral bg-white pl-1.5 h-full'><FaSearch></FaSearch></button>
                        </form>

                    </div>


                </div>
                <div className='banner-right'>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;