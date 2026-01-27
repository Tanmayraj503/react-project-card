import React from 'react';
import Header from './header';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';
import ProfileCard from './ProfileCard';
import SplitText from './SplitText';
import AnimatedContent from './AnimatedContent';
import DogImage from '../assets/dog/dog.png';

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function About() {
    const skills = [
        'Improving React component architecture',
        'Building responsive, accessible UIs',
        'Learning best practices for clean code',
        'Exploring state management libraries',
        'Understanding performance optimization',
        'Practicing test-driven development',
    ];

    return (
        <>
            <Header />
            <section className="about">
                <div className="bg-[#080E21] min-w-full min-h-screen pt-28 lg:pt-30 pb-24">
                    <div className="text-center px-4">
                        <SplitText
                            text="Know About Me"
                            className="mb-4 pb-2 font-bold text-purple-500 text-4xl md:text-5xl "
                            delay={30}
                            duration={1}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                            showCallback={false}
                        />
                        <AnimatedContent
                            distance={30}
                            direction="vertical"
                            reverse={false}
                            duration={1}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                                I'm a Computer Science student passionate about creating innovative solutions through programming and technology.
                            </p>
                        </AnimatedContent>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-16 max-w-[90%] mx-auto mt-15 lg:mt-28 px-4 mb-45'>
                        <AnimatedContent
                            distance={30}
                            direction="horizontal"
                            reverse={true}
                            duration={1.2}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <div>
                                <img src={DogImage} alt="Dog" className='lg:h-100 lg:w-200 rounded-2xl' />
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={30}
                            direction="horizontal"
                            reverse={false}
                            duration={1.3}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <div className='text-gray-400 flex flex-col gap-4 xl:mt-7  flex-wrap font-medium'>
                                <p>I’m Tanmay, a Computer Science student focused on frontend development and modern web technologies.</p>
                                <p>I specialize in building responsive and interactive web interfaces using React and Tailwind CSS. I enjoy working on clean component structures, smooth UI interactions, and creating layouts that adapt seamlessly across devices.</p>
                                <p>My approach to learning is simple: build, break, fix, and improve. I enjoy solving problems, refining details, and constantly pushing my projects to a higher level of polish.</p>
                                <p>I’m motivated by growth — learning new technologies, improving my coding practices, and working on projects that challenge me. My goal is to become a developer who not only writes good code but also builds experiences users genuinely enjoy.</p>
                            </div>
                        </AnimatedContent>
                    </div>

                    <div className='text-center'>
                        <h1 className='mb-4 pb-2 font-bold text-purple-500 mt-40 text-4xl md:text-5xl '>More About Me</h1>
                    </div>
                    <div className='flex justify-center items-center mt-14 w-full'>
                        <div className='more w-[80%] hover:shadow-2xl transition-all duration-300 shadow-purple-500/10 flex justify-center items-center flex-col bg-[#a093aa27] p-6 rounded-xl'>
                            <div className='flex flex-col w-full text-white'>
                                <h3 className='mb-5 mt-3 text-[22px] font-semibold text-center md:text-start'>What I'm Currently Focusing On</h3>
                                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-1">

                                    {skills.map((skill, index) => (
                                        <div key={index} className='bg-[#0b1229de] flex items-center p-4 rounded-2xl border border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all duration-300'>
                                            <p className='text-gray-400 mb-2 bg-[#0b1229de] '>{skill}</p>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}