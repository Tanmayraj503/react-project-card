import React from 'react';
import Header from './header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import SplitText from './SplitText';
import AnimatedContent from './AnimatedContent';
import ScrollToTopButton from './ScrollToTopButton';

const qualifications = [
    {
        degree: "Bachelor of Tehcnology",
        institution: "Guru Gobind Singh Indraprstha University",
        stream: "Computer Science and Engineering",
        year: "2023 - Present",
        location: "Delhi, India",
        cgpa: "CGPA: 8.9",
        details: "Pursuing a Bachelor's degree with a focus on software development, algorithms, and data structures."
    },
    {
        degree: "Pre-University Course",
        institution: "Kulachi Hansraj Model School",
        stream: "Science Stream",
        year: "2020 - 2022",
        location: "Delhi, India",
        cgpa: "CGPA: 8.5",
        details: "Specialized in Physics, Chemistry, Mathematics, and Computer Science. Achieved a high score in board examinations."
    }, {
        degree: "Secondary High School",
        institution: "Kulachi Hansraj Model School",
        stream: "NCERT-based Curriculum",
        year: "2018 - 2020",
        location: "Delhi, India",
        cgpa: "CGPA: 8.9",
        details: ["Focused on Science and Mathematics.",
            "Studied foundations of Mathematics, Science, Social Studies, and English."]
    }
];

const courses = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Web Technologies",
    "Computer Networks",
    "Operating Systems"
]

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function Academics() {
    return (
        <>
            <Header />
            <section className="academics">
                <div className="bg-[#080E21] min-w-full min-h-screen pt-28 lg:pt-30 pb-24">

                    {/* Heading */}
                    <div className="text-center px-4">
                        <SplitText
                            text="Educational Background"
                            className="mb-4 pb-2 font-bold text-purple-500 text-4xl md:text-5xl "
                            delay={20}
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
                            duration={0.9}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                                My academic journey, courses, and educational achievements that have shaped my technical expertise.
                            </p>
                        </AnimatedContent>
                    </div>
                    <AnimatedContent
                        distance={40}
                        direction="vertical"
                        reverse={false}
                        duration={0.9}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}
                    >
                        <div className="name font-bold text-purple-500 mt-24 text-3xl md:text-4xl mb-8 text-center">Education</div>
                    </AnimatedContent>
                    {/* Cards */}
                    <div className="mt-16 ">
                        
                            <div className="max-w-full mx-auto flex flex-wrap gap-6 justify-center ">
                                {qualifications.map((qual, index) => (
                                    <AnimatedContent
                                        key={index}
                                        distance={40}
                                        direction="vertical"
                                        reverse={false}
                                        duration={0.9}
                                        ease="power3.out"
                                        initialOpacity={0}
                                        animateOpacity
                                        scale={1}
                                        threshold={0.1}
                                        delay={0.2 + index * 0.2}
                                    >
                                        <div

                                            className="w-[full] md:max-w-[270px] lg:max-w-[310px] mx-4 md:mx-0  xl:max-w-[400px] md:hover:scale-105 hover:-translate-y-1 before:scale-95 p-6 rounded-xl bg-[#a093aa27] border border-gray-700 text-white  duration-300 transition-all hover:shadow-xl shadow-purple-500/10"
                                        >

                                            <h3 className="text-2xl font-bold mb-6 text-purple-400">
                                                <FontAwesomeIcon icon={faGraduationCap} className='text-blue-500 ' /> {qual.degree}
                                            </h3>

                                            <p className="text-gray-300 text-lg">
                                                {qual.institution}
                                            </p>

                                            <p className='text-gray-400 mt-2 mb-2'>
                                                {qual.stream}
                                            </p>

                                            <div className='flex flex-wrap items-center mt-6 gap-3'>
                                                <p className="text-gray-400 text-sm ">
                                                    <FontAwesomeIcon icon={faCalendar} />  {qual.year}
                                                </p>

                                                <p className="text-gray-400 text-sm ">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {qual.location}
                                                </p>

                                                <p className="text-gray-400 text-sm">
                                                    <FontAwesomeIcon icon={faMedal} /> {qual.cgpa}
                                                </p>
                                            </div>

                                            <p className="text-gray-300 leading-relaxed mt-7">
                                                {qual.details}
                                            </p>

                                        </div>
                                    </AnimatedContent>
                                ))}
                            </div>

                    </div>

                    <div className="mt-40">
                        <p className="text-center mb-14 font-bold text-purple-500 text-3xl md:text-4xl">Key Courses</p>
                        <div className='flex justify-center items-center w-full'>
                            <div className="w-[85%] hover:shadow-2xl transition-all duration-300 shadow-purple-500/10 flex justify-center items-center flex-col bg-[#a093aa27] p-6 rounded-xl">
                                <p className='h-14 flex justify-center items-center w-14 bg-[#5a7ff8] text-white rounded-full'><FontAwesomeIcon icon={faBookOpen} className='mb-6 mt-6 text-3xl' /></p>
                                <div className="lg:grid lg:grid-cols-3 flex flex-wrap justify-center gap-4 rounded-xl lg:gap-14 p-8">
                                    {courses.map((course) => (
                                        <span key={course} className="text-gray-300 flex justify-start gap-3 items-center bg-[#0b1229de] text-center w-full px-5 py-3 rounded-2xl border border-gray-600 shadow-purple-500/10 shadow-md hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all duration-300 text-lg font-medium">
                                            <FontAwesomeIcon icon={faCircle} className='text-blue-400  text-[9px] w-0.5 h-0.5' />{course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <ScrollToTopButton />
            <Footer />
        </>
    );
}
