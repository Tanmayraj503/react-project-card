import React from 'react';
import Header from './header';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';
import ProfileCard from './ProfileCard';
import SplitText from './SplitText';
import AnimatedContent from './AnimatedContent';

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function About() {
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
                            distance={40}
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
                            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                                I'm a Computer Science student passionate about creating innovative solutions through programming and technology.
                            </p>
                        </AnimatedContent>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-10 max-w-[90%] mx-auto mt-30 px-4 mb-45'>
                        <div>
                            <h1>tgcmjkvgug</h1>
                        </div>
                        <div className='text-gray-400 flex flex-col gap-4 flex-wrap font-medium'>
                            <p>I’m Tanmay, a Computer Science student focused on frontend development and modern web technologies.</p>
                            <p>I specialize in building responsive and interactive web interfaces using React and Tailwind CSS. I enjoy working on clean component structures, smooth UI interactions, and creating layouts that adapt seamlessly across devices.</p>
                            <p>My approach to learning is simple: build, break, fix, and improve. I enjoy solving problems, refining details, and constantly pushing my projects to a higher level of polish.</p>
                            <p>I’m motivated by growth — learning new technologies, improving my coding practices, and working on projects that challenge me. My goal is to become a developer who not only writes good code but also builds experiences users genuinely enjoy.</p>
                        </div>
                    </div>

                    <div className='text-center'>
                        <h1 className='mb-4 pb-2 font-bold text-purple-500 mt-40 text-4xl md:text-5xl '>More About Me</h1>
                    </div>
                </div>
            </section>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}