import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaBook } from "react-icons/fa";


export default function AboutHome() {
    const navigate = useNavigate();

    const who = [
        { icon: <FaCode />, title: "Web Developer", description: "Experienced in building modern, responsive web applications using React.js, Tailwind CSS, and Node.js." },
        { icon: <FaLightbulb />, title: "Problem Oriented Thinker", description: "Analyzes complex problems and developes efficient solutions through code." },
        { icon: <FaBook />, title: "Continuous Learner", description: "Constantly learning new technologies, refining fundamentals, and improving through real-world projects." }
    ];

    return (
        <section className="About-home mt-320 px-6 py-16">
            <div className="text-center">
                <motion.h1 className="md:text-[48px] text-4xl font-bold text-purple-500 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}>
                    Who I Am</motion.h1>
                <motion.p className="text-gray-400 mx-auto max-w-2xl text-sm md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    I'm a developer focused on building responsive, maintainable web applications using modern JavaScript frameworks.</motion.p>
            </div>
            <div>
                <motion.div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-7 mt-16">
                    {who.map((item, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: index * 0.2,
                            }}
                            className="bg-[#1C1F36] rounded-lg p-6 border border-gray-700
                             flex flex-col gap-4 text-white font-semibold"
                        >
                            <div className="flex justify-center bg-[#26727c48] rounded-lg w-16 h-16 mx-auto items-center mb-4">
                                <p className="text-cyan-400  text-4xl">{item.icon}</p>
                            </div>
                            <h3 className="text-2xl text-center text-purple-500 font-bold">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
                            <motion.div className="flex justify-center mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}>
                                <button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition duration-300 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-cyan-900/60 hover:-translate-y-0.5" onClick={() => navigate("/about")}>
                                    More About Me <FaLongArrowAltRight />
                                </button>
                            </motion.div>
        </section>
    )
}
