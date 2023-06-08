import { Typewriter } from 'react-simple-typewriter'


const HomeBanner = () => {


    const handleType = (count) => {
        // access word count number
        // console.log(count)
    }


    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }

    return (
        <div>
            <div className="main-container">
                <div className='banner-left'>

                    <div className='flex flex-col gap-4'>

                        <h1 className='pt-20 m-0 font-normal text-4xl'>
                            Learning new languages is{' '}
                            <span className='font-bold text-secondary'>
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

                        <p>Embark on a Multilingual Voyage: Discover the World through Language Learning</p>

                        <button className='btn btn-primary w-fit normal-case'>Explore Classes</button>

                    </div>


                </div>
                <div className='banner-right'>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;