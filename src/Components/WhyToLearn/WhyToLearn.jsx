import whyImage from '../../assets/images/why.webp';

const WhyToLearn = () => {
    return (
        <div className='flex gap-4 items-center main-container my-16'>
            <figure className='w-1/4'><img className='w-full' src={whyImage} alt="" /></figure>
            <div className='w-3/4'>
                <h1 className='font-playfair text-4xl font-bold text-neutral'>Why to learn languages?</h1>
                <p className='text-justify mt-4'>
                    Learning new languages offers a range of benefits that enhance both cognitive abilities and interpersonal skills. From a cognitive perspective, it stimulates critical thinking, problem-solving, and multitasking, sharpening mental agility and improving memory and concentration. Communicatively, it enables individuals to connect with people from diverse cultures, fostering empathy and cross-cultural understanding. Moreover, knowing multiple languages significantly expands job prospects, as many global companies seek employees who can communicate with international clients or partners. Learning a new language also provides personal enrichment by offering insights into different traditions and artistic expressions. It promotes self-confidence and a sense of achievement, as individuals step out of their comfort zones and engage in meaningful conversations across language barriers. Overall, learning new languages is a transformative endeavor with cognitive, communicative, and personal advantages that open doors to new opportunities and enrich lives.
                </p>
                <button className='btn btn-secondary normal-case mt-4'>Enroll Now</button>
            </div>
        </div>
    );
};

export default WhyToLearn;