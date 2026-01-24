import React from 'react';
import SplitText from './SplitText';
import AnimatedContent from './AnimatedContent';
import Header from './header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import { FaDownload } from "react-icons/fa6";


export default function Resume() {
    const technicalSkills = [
        'JavaScript',
        'React',
        'HTML & CSS',
        'Node.js',
        'SQL',
        'Git',
        'REST APIs',
        'TypeScript'
    ];

    const softSkills = [
        'Problem Solving',
        'Team Collaboration',
        'Communication',
        'Time Management',
        'Critical Thinking',
        'Adaptability'
    ];

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <>
            <Header />
            <section className="resume-section">
                <div className="bg-[#080E21] min-w-full min-h-screen pt-28 lg:pt-30 pb-24">
                    <div className="text-center px-4">
                        <SplitText
                            text="Professional Experience & Skills"
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
                                An overview of my professional experience and a showcase of my technical and soft skills.
                            </p>
                        </AnimatedContent>
                    </div>
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
                        <div className="download-button flex justify-center mt-12 md:mt-16 mb-10 items-center bg-purple-500 text-white rounded-xl md:w-54 md:h-14 h-12 w-46 mx-auto hover:bg-purple-600 md:text-lg transition-colors">
                            <button className='flex justify-center items-center gap-2'><FaDownload /> Download Resume</button>
                        </div>
                    </AnimatedContent>

                    <div className="resume-container">
                        <div className="skills">
                            <div className="skill-group">
                                <h3>Technical Skills</h3>
                                <div className="skill-tags">
                                    {technicalSkills.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-group">
                                <h3>Soft Skills</h3>
                                <div className="skill-tags">
                                    {softSkills.map((skill, index) => (
                                        <span key={index} className="skill-tag soft">{skill}</span>
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