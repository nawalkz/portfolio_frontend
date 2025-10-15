import React from "react";
import { motion } from "framer-motion";
import { Variants } from "./data/constants";

const Achievements = [
  {
    id: 1,
    title: "Web Development Internship at Ryd Mediatech",
    description:
      "Developed a full cooperative management system with modules for sales, payments, revenues, and archives. Improved data organization and project monitoring.",
    icon: "https://img.icons8.com/color/96/code.png",
  },
  {
    id: 2,
    title: "Final-Year Project – Library Management System",
    description:
      "Designed and implemented a web platform for managing books, borrow/return operations, and notifications using Laravel and Bootstrap.",
    icon: "https://img.icons8.com/color/96/library.png",
  },
  {
    id: 3,
    title: "Team Project – Travel Management Application",
    description:
      "Built a collaborative application with dynamic filters and booking features, improving user interaction and UI responsiveness.",
icon: "https://img.icons8.com/color/96/tour-bus.png",
  },
];

const AchievementsSection = () => {
  return (
    <div
      id="achievements"
      className="container max-w-screen-xl mx-auto px-4 mt-40"
    >
      <motion.h1
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        Achievements
      </motion.h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
        {Achievements.map(({ id, title, description, icon }) => (
          <motion.div
            variants={Variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            key={id}
            className="border-2 border-primary backdrop-blur-sm bg-white/30 p-8 rounded-3xl text-white hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={icon} alt={title} className="w-12 h-12" />
              <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
