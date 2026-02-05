import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import { useState } from "react";
import dogimage from "../assets/dog/dog.png";
import QRCODE from "../assets/QR_code_gen.png";
import TODO from "../assets/To_do.png";
import Random from "../assets/Random_color.png";
import CAl from "../assets/Calc.png";
import CAt from "../assets/cat.png";
import PORT from "../assets/portfolio.png"
import GENERATOR from "../assets/gen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedContent from './AnimatedContent.jsx'


export default function ProjectCarPortfolio() {
    const [activeCategory, setActiveCategory] = useState('all');
    const Projects = {
        major: [
            // {
            //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            //     title: "E-Commerce Platform",
            //     description: "A full-stack e-commerce platform with payment integration, product management, and user authentication. Built with modern technologies.",
            //     tags: ["React", "Node.js", "MongoDB"],
            //     liveUrl: "https://example.com",
            //     githubUrl: "https://github.com"
            // },
            {
                image: PORT,
                title: "Personal Portfolio",
                description: "A responsive personal portfolio website showcasing my projects, skills, and experience. Features smooth animations, dark theme design, and easy navigation to highlight my work as a developer.",
                tags: ["React", "Tailwind CSS"],
                liveUrl: "https://rajtanportfolio.vercel.app/dog",
                githubUrl: "https://github.com/Tanmayraj503"
            }
        ],
        intermediate: [
            {
                image: GENERATOR,
                title: "Random Dog and Cat Shower",
                description: "A random dog and cat generator that generates random dog and cat images with a click. Simple and easy to use interface.",
                tags: ["React", "Tailwind CSS"],
                liveUrl: "https://dog-shower.vercel.app/dog",
                githubUrl: "https://github.com/Tanmayraj503/Dog-Shower"
            }],
        minor: [
            {
                image: QRCODE,
                title: "QR code Generator",
                description: "A QR Code generator application that allows users to create QR codes for various purposes. Simple and easy to use interface.",
                tags: ["HTMl", "CSS", "JavaScript"],
                liveUrl: "https://tanmayraj503.github.io/QR-code-generator/",
                githubUrl: "https://github.com/Tanmayraj503/QR-code-generator"
            },
            {
                image: dogimage,
                title: "Dog Shower",
                description: "A delightful single-page application (SPA) that provides a dose of instant joy by showering the user with pictures of adorable dogs with a simple click.",
                tags: ["React", "Tailwind", "DogAPI"],
                liveUrl: "https://dog-shower.vercel.app/dog",
                githubUrl: "https://github.com/Tanmayraj503/Dog-Shower"
            },
            {
                image: CAt,
                title: "Cat Shower",
                description: "A delightful single-page application (SPA) that provides a dose of instant joy by showering the user with pictures of adorable cats with a simple click.",
                tags: ["React", "Tailwind", "CatAPI"],
                liveUrl: "https://dog-shower.vercel.app/cat",
                githubUrl: "https://github.com/Tanmayraj503/Dog-Shower"
            },
            {
                image: TODO,
                title: "To-Do List App",
                description: "A simple and intuitive to-do list application that helps users organize their daily tasks. Features task creation, editing, and deletion.",
                tags: ["HTMl", "CSS", "JavaScript"],
                liveUrl: "https://tanmayraj503.github.io/To-do-list/",
                githubUrl: "https://github.com/Tanmayraj503/To-do-list"
            },
            {
                image: Random,
                title: "Random Color Generator",
                description: "A simple and intuitive random color generator that generates random colors with a click. Users can copy the color code easily.",
                tags: ["HTMl", "CSS", "JavaScript"],
                liveUrl: "https://tanmayraj503.github.io/random-color/",
                githubUrl: "https://github.com/Tanmayraj503/random-color"
            },
            {
                image: CAl,
                title: "Calculator App",
                description: "A functional calculator application that performs basic arithmetic operations. Features a clean and user-friendly interface.",
                tags: ["HTMl", "CSS", "JavaScript"],
                liveUrl: "https://tanmayraj503.github.io/simple-calculator/",
                githubUrl: "https://github.com/Tanmayraj503/simple-calculator"
            }
        ]

    };
    const allProjects = [
        ...Projects.major,
        ...Projects.intermediate,
        ...Projects.minor,
    ];

    const categories = [
        { id: 'all', label: 'All Projects', count: allProjects.length },
        { id: 'major', label: 'Major Projects', count: Projects.major.length },
        { id: 'intermediate', label: 'Intermediate Projects', count: Projects.intermediate.length },
        { id: 'minor', label: 'Minor Projects', count: Projects.minor.length }
    ];

    const navigate = useNavigate();


    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const isMobile = window.innerWidth < 768; 
    return (
        <>
            <section className="projectcard bg-[#0f1021bb] mx-auto px-4 md:px-8 py-20 overflow-y-scroll scrollbar-hide-arrows">
                <div className="max-w-[1380px] mx-auto">
                    <div className="text-center mb-10">
                        <motion.h1 className="md:text-[48px] text-[38px] font-bold mx-3 text-purple-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >My Projects</motion.h1>


                        <motion.p className="text-gray-400 mx-4 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}>
                            Showcasing my latest work and side projects</motion.p>
                    </div>
                    <motion.div className="lg:flex-wrap lg:justify-center lg:gap-3 lg:mb-6 lg:flex hidden "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 relative py-3 font-semibold cursor-pointer overflow-hidden group ${activeCategory === category.id
                                    ? ' text-white '
                                    : ' text-gray-500 '
                                    }`}
                            >
                                {category.label}
                                <span className="absolute bottom-1 bg-purple-700 h-0.5 transition-all duration-500 ease-out w-0 left-0 group-hover:w-full"></span>
                                <span className={`ml-2 px-2 py-0.5 rounded-full  text-sm ${activeCategory === category.id
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-200 text-gray-500'
                                    }`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </motion.div>
                    <motion.div className="flex gap-2 py-auto flex-wrap overflow-x-auto scrollbar-hide-arrows bg-[#a093aa27] py-6 border border-gray-500 shadow-purple-500/10 shadow-xl rounded-2xl px-4 mb-6 lg:hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        <div className="flex justify-center items-center text-center text-white text-[14px]"><FontAwesomeIcon icon={faFilter} />
                            Filter :
                            </div>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-3 py-[5px] text-[12px] rounded-2xl font-semibold relative overflow-hidden group transition-all duration-200 hover:scale-105 cursor-pointer active:scale-95 ${activeCategory === category.id
                                    ? "bg-[#8d79af] text-white"
                                    : "bg-[#0b1229de] text-gray-400"
                                    }
    `}
                            >
                                {category.label}
                            </button>
                        ))}

                    </motion.div>

                    <motion.div className="pb-12 overflow-y-auto "
                        initial={{ opacity: 0, y: isMobile? 20 : 30 }}
                        whileInView={{ opacity: 1, y: isMobile? 0 : 0}}
                        viewport={{ once: true, amount: isMobile? 0.1 : 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        <div className="grid lg:max-h-[450px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-6 py-1 pt-5 pb-5">
                            {(activeCategory === "all"
                                ? allProjects
                                : Projects[activeCategory]
                            ).map((project, index) => (
                                <div key={index} className={`${index >= 3 ? 'hidden lg:block' : ''} `}>
                                    <ProjectCard
                                        image={project.image}
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tags}
                                        liveUrl={project.liveUrl}
                                        githubUrl={project.githubUrl}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className=""
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        <button className="px-6 py-3 font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-500 lg:hidden cursor-pointer text-center block mx-auto rounded-2xl hover:bg-purple-700 transition duration-300" onClick={() => navigate('/projects')}>More Projects </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
} 