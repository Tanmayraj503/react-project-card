import React from "react";
import { motion } from "framer-motion";

export default function Techstack() {
  const skills = [
    { name: "JavaScript", percent: 75 },
    { name: "React", percent: 80 },
    { name: "Tailwind CSS", percent: 90 },
    { name: "Node.js", percent: 65 },
    { name: "MongoDB", percent: 90},
    { name: "MySQL", percent: 90}
  ];

  return (
    <section className=" bg-[#080e2199] px-4 py-20">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center lg:mb-4"
      >
        <h1 className="text-purple-500 md:text-[48px] text-[38px] font-bold mb-2">
          Tech Stack
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          A collection of technologies I work with to build web applications and
          solve complex problems.
        </p>
      </motion.div>

      {/* Tech cards */}
      <div className="max-w-3xl lg:px-8 py-10 md:py-18  md:text-lg mx-auto grid md:grid-cols-2 gap-7">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1, // 👈 stagger
            }}
            className="bg-[#1C1F36] rounded-xl p-6 border border-gray-700
                       flex flex-col gap-4 text-white font-semibold"
          >
            {/* Card content */}
            <div className="flex justify-between text-gray-400">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 1.1,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.2, // bar fills after card appears
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
