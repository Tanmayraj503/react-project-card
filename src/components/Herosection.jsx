import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoMdDocument } from "react-icons/io";
import { FaDatabase } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { MdPrivateConnectivity } from "react-icons/md";


export default function Hero() {
    const navigate = useNavigate();

    const isMObile = window.innerWidth <768;
    return (
        <section className="Hero bg-[#080e2199] px-4 md:px-8 py-20">
            <div className="md:px-6 mt-3 lg:mt-6 py-16 lg:py-30">
                <div className="grid xl:grid-cols-2 gap-12 xl:gap-16">
                    <div className="flex flex-col justify-center items-start text-white">
                        <motion.p className="text-cyan-400 bg-[#26727c48] rounded-full px-3 text-sm max-w-[180px] py-1 mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >Welcome to my portfolio</motion.p>
                        <motion.h1 className="md:text-6xl text-5xl font-bold "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}>
                            Hi, I'm</motion.h1>
                        <motion.h1 className="md:text-6xl text-5xl font-bold bg-linear-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent pb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}>
                            Tanmay Raj</motion.h1>
                        <motion.h1 className="text-gray-400 mb-8 md:text-3xl text-2xl font-semibold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ delay: 0.28, duration: 0.6, ease: "easeOut" }}>
                            Web Developer</motion.h1>
                        <motion.p className="text-gray-400 text-[18px] md:text-xl md:mb-4 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ delay: 0.33, duration: 0.6, ease: "easeOut" }}>
                            Building digital experiences that make people stop scrolling and start clicking. Because your website shouldn't just exist—it should perform. I specialize in creating fast, responsive, and conversion-focused web solutions that help businesses grow. From concept to deployment, I deliver websites that work as hard as you do.</motion.p>
                        <motion.div className="flex flex-wrap gap-3 md:gap-5 justify-start mt-1 md:justify-center md:mt-4 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ delay:isMObile? 0.34 : 0.37, duration:isMObile? 0.5 : 0.6, ease: "easeOut" }}>
                            <button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white font-bold md:py-3 md:px-7 py-2 px-6 rounded-lg cursor-pointer md:rounded-xl transition duration-300 hover:shadow-lg hover:shadow-cyan-900/60 hover:-translate-y-0.5" onClick={() => navigate("/contact")}>Get in Touch</button>
                            <button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white font-bold md:py-3 md:px-6 py-2 px-5 rounded-lg md:rounded-xl cursor-pointer transition duration-300 hover:shadow-lg hover:shadow-cyan-900/60 hover:-translate-y-0.5" onClick={() => navigate("/projects")}>
                                View Projects
                            </button>
                        </motion.div>
                    </div>
                    <motion.div className="text-white ml-20 bg-[#00fff721] hover:shadow-xl hover:shadow-[#ff910016] transition:duration xl:block hidden duration-300 rounded-lg p-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true,}}
                        transition={{ duration: 0.1, type: "spring", stiffness: 100 }}>
                        <div className="grid gap-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col hover:shadow-lg hover:shadow-gray-600 bg-[#62e1d657] border border-gray-500 rounded-lg py-4 hover:scale-105 transition-duration duration-250">
                                    <p className="pl-4 text-[22px] font-semibold flex items-center gap-2"><CiGlobe className="text-cyan-400 text-xl" /> JavaScript</p>
                                    <p className="text-gray-400 pl-4 mt-1 text-sm">Frontend and Backend Development</p>
                                </div>
                                <div className="flex flex-col bg-[#62e1d657] hover:shadow-lg hover:shadow-gray-600 border border-gray-500 rounded-lg py-4 hover:scale-105 transition-duration duration-250">
                                    <p className="pl-4 text-[22px] font-semibold flex items-center gap-2"><FaCode className="text-cyan-400 text-xl" /> React.js</p>
                                    <p className="text-gray-400 pl-4 mt-1 text-sm">Web UI Library</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col bg-[#62e1d657] hover:shadow-lg hover:shadow-gray-600 border border-gray-500 rounded-lg py-4 hover:scale-105 transition-duration duration-250">
                                    <p className="pl-4 text-[22px] font-semibold flex items-center gap-2"><RiTailwindCssFill className="text-cyan-400 text-xl" /> Tailwind</p>
                                    <p className="text-gray-400 pl-4 mt-1 text-sm">Utility-first styling</p>
                                </div>
                                <div className="flex flex-col bg-[#62e1d657] hover:shadow-lg hover:shadow-gray-600 border border-gray-500 rounded-lg py-4 hover:scale-105 transition-duration duration-250">
                                    <p className="pl-4 text-[22px] font-semibold flex items-center gap-2"><FaCss3Alt className="text-cyan-400 text-xl" /> CSS</p>
                                    <p className="text-gray-400 pl-4 mt-1 text-sm">Styling language</p>
                                </div>
                                <div className="flex flex-col bg-[#62e1d657] hover:shadow-lg hover:shadow-gray-600 border border-gray-500 rounded-lg py-4 hover:scale-105 transition-duration duration-250">
                                    <p className="pl-4 text-[22px] font-semibold flex items-center gap-2"><MdPrivateConnectivity className="text-cyan-400 text-xl" /> APIs</p>
                                    <p className="text-gray-400 pl-4 mt-1 text-sm">Software bridge</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col bg-[#62e1d657] hover:shadow-lg hover:shadow-gray-600 border border-gray-500 rounded-lg py-4 hover:scale-105 transition-duration duration-250">
                                    <p className="pl-4 text-[22px] font-semibold flex items-center gap-2"><FaDatabase className="text-cyan-400 text-xl" /> MongoDb</p>
                                    <p className="text-gray-400 pl-4 mt-1 text-sm">NoSQL database</p>
                                </div>
                                <div className="flex flex-col bg-[#62e1d657] hover:shadow-lg hover:shadow-gray-600 border border-gray-500 rounded-lg py-4 hover:scale-105 transition-duration duration-250">
                                    <p className="pl-4 text-[22px] font-semibold flex items-center gap-2"><IoMdDocument className="text-cyan-400 text-xl" /> MySQL</p>
                                    <p className="text-gray-400 pl-4 mt-1 text-sm">SQL database</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col bg-[#62e1d657] hover:shadow-lg hover:shadow-gray-600 border border-gray-500 rounded-lg py-4 hover:scale-105 transition-duration duration-250">
                                    <p className="pl-4 text-[22px] font-semibold flex items-center gap-2"><FaServer className="text-cyan-400 text-xl" /> Node.js</p>
                                    <p className="text-gray-400 pl-4 mt-1 text-sm">Backend Development</p>
                                </div>
                                <div className="flex flex-col bg-[#62e1d657] hover:shadow-lg hover:shadow-gray-600 border border-gray-500 rounded-lg py-4 hover:scale-105 transition-duration duration-250">
                                    <p className="pl-4 text-[22px] font-semibold flex items-center gap-2"><FaGithub className="text-cyan-400 text-xl" /> Github</p>
                                    <p className="text-gray-400 pl-4 mt-1 text-sm">Code Hosting Platform</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}