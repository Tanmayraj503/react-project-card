import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";


export default function ContactHome() {
    const navigate = useNavigate();

    return (
        <>
            <section className="Contact_Home">
                <div className="flex justify-center mx-5">
                    <div className="bg-[#1C1F36] w-4xl flex flex-col justify-center items-center my-16 p-8  md:p-16 rounded-xl text-center hover:shadow-2xl hover:shadow-purple-900/30 transition-all duration-300 border border-gray-700">
                        <h1 className="text-purple-500 text-[26px] md:text-4xl font-bold mb-4">Let's Build Something Meaningful</h1>
                        <p className="text-gray-400 mb-0">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
                        <p className="text-gray-400 mb-9">If you have a project in mind, feel free to reach out!</p>
                        <button onClick={() => navigate("/contact")} className="rounded-xl flex items-center justify-center gap-3 font-semibold bg-purple-500 text-gray-300 md:text-xl md:py-3 text-lg px-12 py-2 md:px-15 hover:shadow-lg hover:shadow-purple-900/60 transition-all duration-300 hover:translate-y-[-2px]"><FaPaperPlane /> Get in Touch</button>
                    </div>
                </div>
            </section>
        </>
    );
}

