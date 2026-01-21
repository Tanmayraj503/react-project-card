import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import { useState } from "react";
import dogimage from "../assets/dog/dog.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Scroll } from "lucide-react";
import ScrollToTopButton from "../ScrollToTopButton.jsx";
import SplitText from "../SplitText.jsx";
import AnimatedContent from '../AnimatedContent.jsx'
import Footer from "../Footer.jsx";


export default function ProjectCarPortfolio() {
    const [activeCategory, setActiveCategory] = useState('all');
    const Projects = {
        major: [
            {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce platform with payment integration, product management, and user authentication. Built with modern technologies.",
                tags: ["React", "Node.js", "MongoDB"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com"
            },
            {
                image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=600&h=400&fit=crop",
                title: "Social Media App",
                description: "A social media application that allows users to connect, share posts, and interact with each other. Features real-time notifications and messaging.",
                tags: ["React", "Firebase", "Socket.io"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com"
            }],
        intermediate: [
            {
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
                title: "Project Management Tool",
                description: "A project management tool designed to help teams collaborate, track progress, and manage tasks efficiently. Includes Kanban boards and Gantt charts.",
                tags: ["React", "Node.js", "MongoDB"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com"
            },
            {
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
                title: "Personal Blog",
                description: "A personal blog platform where users can create, edit, and publish blog posts. Features a rich text editor and SEO optimization.",
                tags: ["React", "Gatsby", "GraphQL"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com"
            }],
        minor: [
            {
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
                title: "Fitness Tracker",
                description: "A fitness tracking application that allows users to log workouts, monitor progress, and set fitness goals. Integrates with wearable devices.",
                tags: ["React", "Node.js", "Express", "MongoDB"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com"
            },
            {
                image: dogimage,
                title: "Dog Shower",
                description: "A delightful single-page application (SPA) that provides a dose of instant joy by showering the user with pictures of adorable dogs with a simple click.",
                tags: ["React", "Tailwind", "DogAPI"],
                liveUrl: "https://dog-shower.vercel.app/dog",
                githubUrl: "https://github.com"
            }]

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
            <section className="projectcard pt-16 pb-20 mx-auto bg-[#080E21] min-h-screen overflow-y-scroll scrollbar-hide-arrows">
                <div className="max-w-[1380px] mx-auto">
                    <div className="text-center mb-10">
                        <SplitText
                            text="My Projects"
                            className="text-[49px] font-bold text-purple-500 mb-"
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
                            distance={30}
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
                            <p className="text-gray-400 text-lg">Showcasing my latest work and side projects</p>

                        </AnimatedContent>
                    </div>
                    <AnimatedContent
                        distance={10}
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
                        <div className="lg:flex-wrap lg:justify-center lg:gap-3 lg:mb-6 lg:flex hidden ">
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
                        </div>
                    </AnimatedContent>
                    <div className="flex gap-2 py-auto flex-wrap overflow-x-auto scrollbar-hide-arrows bg-[#a093aa27] py-6 border border-gray-500 shadow-purple-500/10 shadow-xl rounded-2xl px-4 mx-6 mb-6 lg:hidden">
                        <div className="flex justify-center items-center text-center text-white text-[14px]"><FontAwesomeIcon icon={faFilter} />
                            Filter :</div>
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

                    </div>
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

                        <div className="pb-14  overflow-y-auto pr-2">
                            <div className="grid lg:max-h-[450px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-1 pt-5 pb-5">
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
                        </div>
                    </AnimatedContent>
                    <div className="">
                        <button className="px-6 py-3 font-semibold text-white bg-purple-600 lg:hidden cursor-pointer text-center block mx-auto rounded-2xl hover:bg-purple-700 transition duration-300" onClick={() => navigate('/outerproject')}>More Projects </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
} 