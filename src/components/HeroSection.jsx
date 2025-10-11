import { useState } from "react";
import { motion, stagger, useAnimate, animate } from "framer-motion";
import {
  randomNumberBetween,
  role,
  description,
  name,
  personeName,
} from "./data/constants";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { link } from "framer-motion/client";

const buttons = [
  { id: 1, icon: <FaGithub />, name: "GitHub", link: "https://github.com/nawalkz" },
  { id: 2, icon: <FaFacebook />, name: "Facebook", link: "https://www.facebook.com/Nawal Kz" },
  { id: 3, icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/kz.nawal0" },
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isLoadeding, setIsLoadeding] = useState(true);
  const [scope, animate] = useAnimate();
  const onHoverStart = () => {
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);
    const sparklesFadeOut = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);
    const sparklesReset = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };
  return (
    <div className="container max-w-screen-xl mx-auto px-4 text-white">
      <section className="relative w-full mt-10">
        <div className="w-full px-5 sm:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
          <div
            className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl
                    mad:max-w-3xl mx-auto
                    "
          >
            <div className="lg:py-6 z-[100]">
              <div className="text-center lg:text-left">
                <h6 className="mb-[15px] opacity-[70%] tracking-widest font-[300] text-[14px]">
                  {role.map((letter, i) => (
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i / 10 }}
                      key={i}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </h6>
                <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                  {name.map((word, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25, delay: i / 10 }}
                      key={i}
                    >
                      {word}
                    </motion.span>
                  ))}{" "}
                  <span className="text-primary">
                    {personeName.map((letter, i) => (
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: (name.length + i) / 10,
                        }}
                        key={i}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </h1>
                <p className="text-[15px] opacity-[70%] font-[300] mt-[10px] text-white text-center lg:text-left mx-auto max-w-xl">
                  {description.map((word, i) => (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i / 20 }}
                      key={i}
                    >
                      {word}
                      {""}
                    </motion.span>
                  ))}
                </p>
                <div className="flex mt-20 md:mt-10 justify-center lg:justify-normal">
                  <div ref={scope}>
                    <button
                      onMouseEnter={onHoverStart}
                      className="relative rounded-full border-2 border-primary px-6 py-2 text-2xl text-primary
                    transition-colors z-[100]
                    "
                    >
                      <span className="sr-only">Hire me </span>
                      <span
                        className="block h-8 overflow-hidden"
                        aria-hidden="true"
                      >
                        {["H", "i", "r", "e", " ", "m", "e"].map(
                          (letter, index) => (
                            <span
                              data-letter={letter}
                              className="relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full
                            after:h-8 after:content-[attr(data-letter)]
                            "
                              key={`${letter}-${index}`}
                            >
                              {letter === " " ? "\u00A0" : letter}{" "}
                            </span>
                          )
                        )}
                      </span>
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 block"
                      >
                        {Array.from({ length: 20 }).map((_, index) => (
                          <svg
                            className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                            key={index}
                            viewBox="0 0 122 117"
                            width={10}
                            height={10}
                          >
                            <path
                              className="fill-primary"
                              d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,
                              74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,
                              116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,
                              3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z
                              "
                            />
                          </svg>
                        ))}
                      </span>
                    </button>
                  </div>
                  <div className="flex justify-center items-center space-x-4">
                    {buttons.map(({ id, icon, name, link }) => (
                      <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative rounded-full p-2 border-2 ml-5 border-primary text-2xl text-primary transition-colors hover:scale-105 z-[100]"
                        aria-label={name}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:h-full md:flex">
                <div className="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full items-center relative">
                  <div
                    className="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-primary blur-3xl rounded-full
                  hidden lg:block
                  "
                  ></div>
                  <div
                    className="absolute max-h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full
                   shadow-lg border-2 border-primary
                  "
                  >
                    <motion.div
                      initial={false}
                      animate={
                        isLoaded && isInView
                          ? {
                              WebkitMaskImage:
                                "repeating-linear-gradient(to right,rgba(0,0,0,0) 0px,rgba(0,0,0,0) 0px,rgba(0,0,0,1) 0px,rgba(0,0,0,1) 30px)",
                              maskImage:
                                "repeating-linear-gradient(to right,rgba(0,0,0,0) 0px,rgba(0,0,0,0) 0px,rgba(0,0,0,1) 0px,rgba(0,0,0,1) 30px )",
                            }
                          : {
                              WebkitMaskImage:
                                "repeating-linear-gradient(to right,rgba(0,0,0,0) 0px,rgba(0,0,0,0) 30px,rgba(0,0,0,1) 30px,rgba(0,0,0,1) 30px )",
                              maskImage:
                                "repeating-linear-gradient(to right,rgba(0,0,0,0) 0px,rgba(0,0,0,0) 30px,rgba(0,0,0,1) 30px,rgba(0,0,0,1) 30px )",
                            }
                      }
                      transition={{ duration: 1, delay: 1 }}
                      onViewportEnter={() => setIsInView(true)}
                    >
                      {isLoadeding && (
                        <div className="flex justify-center items-center h-full">
                          <div className="loader">Loading ...</div>
                        </div>
                      )}
                      <img
                        src="/heroPic.jpg"
                        alt="hero picture"
                        width={400}
                        height="auto"
                        onLoad={() => {
                          setIsLoaded(true);
                          setIsLoadeding(false);
                        }}
                        className="rounded-full object-cover"
                        style={{
                          display: isLoaded ? "block" : "none",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
