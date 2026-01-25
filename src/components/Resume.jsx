import React from 'react';
import SplitText from './SplitText';
import AnimatedContent from './AnimatedContent';
import Header from './header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import { FaDownload } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";


export default function Resume() {

    const softSkills = [
        {
            title:'Problem Solving',
            description:'Analytical approach to complex technical challenges'
        },
        {
            title:'Team Collaboration',
            description:'Effective teamwork and coordination with diverse groups'
        },
        {
            title:'Communication',
            description:'Clear and concise communication of ideas and concepts'
        },
        {
            title:'Time Management',
            description:'Efficient project delivery within deadlines'
        },
        {
            title:'Critical Thinking',
            description:'Evaluating information objectively and making reasoned judgments'
        },
        {
            title:'Adaptability',
            description:'Flexibility in adapting to changing circumstances and new challenges'
        }
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
                            text="Professional Experience"
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
                                I'm an aspiring developer specializing in web development, eager to contribute my skills and grow in a dynamic team environment.
                            </p>
                        </AnimatedContent>
                    </div>
                    <AnimatedContent
                        distance={40}
                        direction="vertical"
                        reverse={false}
                        duration={1.1}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}
                    >
                        <div className="download-button flex justify-center mt-12 mb-6 items-center bg-purple-500 text-white rounded-xl md:w-54 md:h-14 h-12 w-46 mx-auto hover:bg-purple-600 md:text-lg transition-colors">
                            <a 
                            href=""
                            download='Resume_Tanmay_Raj.pdf'
                            className='flex justify-center items-center gap-2'
                            ><FaDownload /> Download Resume
                            </a>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={50}
                        direction="vertical"
                        reverse={false}
                        duration={1.1}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}
                    >
                        <p className='mb-7 mt-14 font-bold text-purple-500 text-[34px] md:text-[40px] flex justify-center items-center'>Skills</p>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={60}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}
                    >
                        <div className="resume-container flex justify-center items-center w-full">
                            <div className="skills w-[80%] hover:shadow-2xl transition-all duration-300 shadow-purple-500/10 flex justify-center items-center flex-col bg-[#a093aa27] p-6 rounded-xl">
                                <div className="skill-group flex flex-col w-full justify-start items-start text-white">
                                    <h3 className='mb-5 mt-3 flex gap-4 xl:gap-6 justify-start items-center text-[26px]'><FaCode className='text-blue-500 xl:ml-3' /> Technical Skills</h3>
                                    <div className="skill-tags justify-center grid grid-cols-2 text-gray-400 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:grid-cols-6 rounded-xl p-4 w-full">

                                        <span className="skill-tag justify-center hover:scale-115 duration-200 transition-all items-center flex flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <FaHtml5 className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-orange-600 bg-[#e1760b42]' /> HTML
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <FaCss3Alt className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-blue-500 bg-[#0b72e142]' /> CSS
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <FaJs className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-yellow-500 bg-[#e1e10b42]' /> JavaScript
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <FaReact className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-blue-400 bg-[#0bd3e142]' /> React
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <FaNode className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-green-400 bg-[#0bd3e142]' /> Node.js
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <FaGitAlt className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-orange-500 bg-[#e1760b42]' /> Git
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <IoLogoGithub className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-black bg-[#ffffff5a]' /> Github
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <FaBootstrap className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-purple-700 bg-[#5b18735a]' /> Bootstrap
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <RiTailwindCssFill className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-blue-400 bg-[#1876995a]' /> Tailwind
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <GrMysql className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-cyan-500 bg-[#1897995a]' /> MySQL
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <DiMongodb className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-green-500 bg-[#1992295a]' /> MongoDB
                                        </span>
                                        <span className="skill-tag justify-center items-center flex hover:scale-115 duration-200 transition-all flex-col gap-2 hover:-translate-y-0.5 text-[14px] font-medium">
                                            <VscVscode className='text-6xl border border-gray-600 rounded-xl p-2 shadow-md hover:shadow-lg hover:shadow-purple-500/20 text-blue-500 bg-[#196a925a]' /> vs code
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>

                    <div className="resume-container flex justify-center items-center w-full mt-24">
                        <div className="w-[80%] hover:shadow-2xl transition-all duration-300 shadow-purple-500/10 flex justify-center items-center flex-col bg-[#a093aa27] p-6 rounded-xl">
                            <div className="skill-group">
                                <h3 className="mb-5 mt-3 text-white text-[26px]">Soft Skills</h3>
                                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 rounded-xl  p-1">
                                    {softSkills.map((skill, index) => (
                                        <div className="flex bg-[#0b1229de] flex-col p-4 rounded-2xl border border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all duration-300" key={index}>
                                            <span key={index} className="text-gray-300 mb-2 bg-[#0b1229de] text-lg font-medium">{skill.title}</span>
                                            <span className="text-gray-400 text-sm">{skill.description}</span>
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