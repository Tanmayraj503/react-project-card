import React from "react";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectCarPortfolio() {

    const Projects = [
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with payment integration, product management, and user authentication. Built with modern technologies.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
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
        },
        {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
            title: "Project Management Tool",
            description: "A project management tool designed to help teams collaborate, track progress, and manage tasks efficiently. Includes Kanban boards and Gantt charts.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
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
        },
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
            title: "Fitness Tracker",
            description: "A fitness tracking application that allows users to log workouts, monitor progress, and set fitness goals. Integrates with wearable devices.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        }

    ];

    return (
        <>
            <section className="projectcard py-10 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl text-orange-400 mb-1">My Projects</h1>
                        <p className="text-gray-400 text-lg">Showcasing my latest work and side projects</p>
                    </div>
                    <div className="max-h-[500px] overflow-y-auto pr-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-1  mx-7 rounded-2xl">
                            {Projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    tags={project.tags}
                                    liveUrl={project.liveUrl}
                                    githubUrl={project.githubUrl}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 