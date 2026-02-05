import React from "react";
import ProjectCard from "./ProjectCard";
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
import Footer from "./Footer";
import { Scroll } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";
import Header from "./header";
import SplitText from "./SplitText";
import AnimatedContent from './AnimatedContent'


export default function ProjectCardPortfolio() {
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
                liveUrl: "https://Rajtanportfolio.vercel.app/dog",
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



    return (
        <>
            <Header />
            <section className="projectcard pt-28 lg:pt-30 pb-24 mx-auto bg-[#080E21] min-h-screen overflow-y-scroll scrollbar-hide-arrows">
                <div className="max-w-[1380px] mx-auto ">
                    <div className="text-center mb-10">

                        <SplitText
                            text="My Projects"
                            className="md:text-[48px] text-[38px] font-bold mx-3 text-purple-500 "
                            delay={40}
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
                            <p className="text-gray-400 mx-4 text-lg">Showcasing my latest work and side projects</p>

                        </AnimatedContent>

                    </div>

                    <AnimatedContent
                        distance={40}
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
                        <div className="flex gap-2 py-auto flex-wrap lg:gap-3 lg:mb-6 overflow-x-auto scrollbar-hide-arrows bg-[#a093aa27] py-6 border border-gray-500 shadow-purple-500/10 shadow-xl rounded-2xl px-4 mx-6 mb-6 ">
                            <div className="flex justify-center items-center text-center text-white text-[14px] "><FontAwesomeIcon icon={faFilter} />
                                Filter :</div>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-3 py-[5px] text-[12px] rounded-2xl font-semibold relative overflow-hidden group cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 ${activeCategory === category.id
                                        ? "bg-[#8d79af] text-white"
                                        : "bg-[#0b1229de] text-gray-400"
                                        }
                            `}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={20}
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

                        <div className="overflow-y-auto pr-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6  pt-5 ">
                                {(activeCategory === "all"
                                    ? allProjects
                                    : Projects[activeCategory]
                                ).map((project, index) => (
                                    <div key={index} >
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
                        </div>
                    </AnimatedContent>
                </div>

            </section>
            <Footer />
            <ScrollToTopButton />
        </>
    );
} 