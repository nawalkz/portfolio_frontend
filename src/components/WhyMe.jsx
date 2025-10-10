import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { randomNumberBetween, WhyMeTabs, Variants } from "./data/constants";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection"
export default function WhyMe() {
    const [selectedTab, setSelectedTab] = useState(WhyMeTabs[0]);
    const [sparkles, setSparkles] = useState([]);

    const onClickEffect = (index) => {
        const newSparkles = Array.from({ length: 20 }).map((_, sparkleIndex) => {
            const startX =
                (index + 0.5) * (100 / WhyMeTabs.length) + randomNumberBetween(-10, 10);
            const startY = randomNumberBetween(40, 70);
            const scale = randomNumberBetween(1, 3);

            return {
                id: sparkleIndex,
                style: {
                    left: `${startX}%`,
                    top: `${startY}%`,
                    opacity: 1,
                    transform: `translate(-50%,-50%) scale(${scale})`,
                },
            };
        });

        setSparkles(newSparkles);
        setTimeout(() => {
            setSparkles([]);
        }, 600);
    };

    return (
        <div
            id="whyme"
            className="container max-w-screen-xl mx-auto px-4 z-10 mt-40"
        >
            <motion.h1
                variants={Variants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
            >
                Why Hire Me
            </motion.h1>
            <motion.div
                variants={Variants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="max-w-screen-xl mx-auto px-4 rounded-lg z-[100] overflow-hidden shadow-lg flex flex-col mt-20
             relative
             "
            >
                <nav className="p-2 rounded-t-lg">
                    <ul className="flex w-full relative text-white">
                        {WhyMeTabs.map((item, index) => (
                            <li
                                key={item.label}
                                className={`flex-1 cursor-pointer border-2 border-b-2
                         border-primary bg-white/50 rounded-xl ml-2 p-2 z-[100]
                         ${item === selectedTab
                                        ? "bg-[#66c61ca1] font-bold"
                                        : ""
                                    }
                         `}
                                onClick={() => {
                                    setSelectedTab(item);
                                    onClickEffect(index);
                                }}
                            >
                                {` ${item.label}`}
                            </li>
                        ))}
                    </ul>
                </nav>
                <main className="flex justify-center items-center flex-grow text-5xl select-none">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab.label}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="min-w-full"
                        >
                            {selectedTab.label === "Experience" &&  <ExperienceSection />}
                            {selectedTab.label === "Education" && <EducationSection /> }
                            {selectedTab.label === "Skills" && <SkillsSection /> }
                        </motion.div>
                    </AnimatePresence>
                </main>
                <div className="absolute inset-0 pointer-events-none z-[200]">
                    {sparkles.map((sparkle) => (
                        <motion.div
                            key={sparkle.id}
                            className="absolute"
                            style={{
                                ...sparkle.style,
                                position: "absolute",
                                pointerEvents: "none",
                            }}
                            initial={{ opacity: 1 }}
                            animate={{
                                y: randomNumberBetween(-300, -300),
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                            }}
                        >
                            <svg
                                className="fill-primary"
                                viewBox="0 0 122 117"
                                width={10}
                                height={10}
                            >
                                <path
                                    d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,
                              74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,
                              116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,
                              3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z
                              "
                                />
                            </svg>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
