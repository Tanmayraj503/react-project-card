import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    return (
        <section className="Hero px-8 py-18">
            <div className="md:px-6 mt-10 py-32">
                <div className="grid lg:grid-cols-2">
                    <div className="flex flex-col justify-center items-start text-white">
                        <p className="text-cyan-400 bg-[#26727c48] rounded-full px-3 text-sm max-w-[180px] py-1 mb-5">Welcome to my portfolio</p>
                        <h1 className="md:text-6xl text-5xl font-bold ">Hi, I'm</h1>
                        <h1 className="md:text-6xl text-5xl font-bold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent pb-4">Tanmay Raj</h1>
                        <h1 className="text-gray-400 mb-7 md:text-3xl text-2xl font-semibold">Web Developer</h1>
                        <p className="text-gray-400 text-[18px] md:text-xl md:mb-4 mb-6">Passionate about programming and software development with expertise in Python, JavaScript, and C++. Building modern web applications using Node.js, React.js, and Next.js. Freelancer specializing in AI-powered solutions.</p>
                        <div className="flex flex-wrap gap-3 md:gap-5 justify-start mt-1 md:justify-center md:mt-4 items-center">
                                <button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white font-bold md:py-3 md:px-7 py-2 px-6 rounded-lg cursor-pointer md:rounded-xl transition duration-300 hover:shadow-lg hover:shadow-cyan-900/60 hover:-translate-y-0.5" onClick={() => navigate("/contact")}>Get in Touch</button>
                                <button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white font-bold md:py-3 md:px-6 py-2 px-5 rounded-lg md:rounded-xl cursor-pointer transition duration-300 hover:shadow-lg hover:shadow-cyan-900/60 hover:-translate-y-0.5" onClick={() => navigate("/projects")}>
                                View Projects
                            </button>
                        </div>
                    </div>
                    <div className="text-white">

                    </div>
                </div>
            </div>

        </section>
    );
}