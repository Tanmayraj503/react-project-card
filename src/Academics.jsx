import React from 'react';
import Header from './header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import ScrollToTopButton from './ScrollToTopButton';

const qualifications = [
    {
        degree: "Bachelor of Tehcnology",
        institution: "Guru Gobind Singh Indraprastha University",
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

export default function Academics() {
    return (
        <>
            <Header />

            <div className="bg-[#080E21] min-w-full min-h-screen pt-34 pb-24">

                {/* Heading */}
                <div className="text-center px-4">
                    <p className="mb-6 font-bold text-purple-500 text-4xl md:text-5xl">
                        Educational Background
                    </p>
                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                        My academic journey, courses, and educational achievements that have shaped my technical expertise.
                    </p>
                </div>

                <div className="name font-bold text-purple-500 mt-20 text-3xl md:text-4xl mb-8 text-center">Education</div>

                {/* Cards */}
                <div className="mt-12 ">
                    <div className="max-w-full mx-auto flex flex-wrap gap-6 justify-center ">
                        {qualifications.map((qual, index) => (
                            <div
                                key={index}
                                className="w-full md:max-w-[270px] lg:max-w-[310px] mx-4 md:mx-0  xl:max-w-[400px] md:hover:scale-105 hover:-translate-y-1 before:scale-95 p-6 rounded-xl bg-[#a093aa27] border border-gray-700 text-white  duration-300 transition-all hover:shadow-xl shadow-purple-500/10"
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

                                <div className='flex flex-wrap items-center gap-3'>
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

                                <p className="text-gray-300 leading-relaxed mt-3">
                                    {qual.details}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    <p className="text-center mb-8 font-bold text-purple-500 text-3xl md:text-4xl">Key Courses</p>
                    <div className='flex justify-center items-center w-full'>
                        <div className="w-[75%] bg-[#a093aa27] p-6 rounded-xl">
                            <div className="grid grid-cols-3 gap-14 p-8">
                                {courses.map((course) => (
                                    <span key={course} className="text-gray-300 bg-[#0b1229de] px-5 py-3 rounded-2xl border border-gray-600 shadow-purple-500/10 shadow-md hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-lg font-medium">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <ScrollToTopButton />
            <Footer />
        </>
    );
}
