import React from "react";
export default function Hero() {
    return (
        <section className="Hero">
            <div className="max-w-7xl mx-auto px-6 py-32 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-purple-500 mb-6">Welcome to My Portfolio</h1>
                <p className="text-gray-400 text-lg md:text-xl mb-8">Showcasing my projects, skills, and experience in web development.</p>
                <a href="#projects" className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-300">View Projects</a>
            </div>
        </section>
    );
}