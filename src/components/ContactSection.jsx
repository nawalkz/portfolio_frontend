import React from "react";
import { Variants, randomNumberBetween, contactText1 } from "./data/constants";
import { motion, stagger, useAnimate, animate } from "framer-motion";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const buttons = [
  { id: 1, icon: <FaGithub />, name: "GitHib" },
  { id: 2, icon: <FaFacebook />, name: "Facebook" },
  { id: 3, icon: <FaInstagram />, name: "Instagram" },
];

const ContactSection = () => {
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
    <div
      id="contact"
      className="container max-w-screen-xl mx-auto px-4 z-10 mt-40 items-center text-white"
    >
      <motion.h1
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        Contact Me
      </motion.h1>
      <div className="grid md:grid-cols-12 grid-cols-1 mt-20">
        <div className="md:col-span-5 col-span-1">
          <div className="">
            <h6 className="mb-[15px] opacity-[70%] uppercase tracking-widest font-light text-[14px]">
              Get In Touch
            </h6>
            <h2 className="md:text-[50px] text-[30px] font-bold text-primary">
              {contactText1.map((word, i) => (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i / 10 }}
                  viewport={{ once: true, amount: 0.8 }}
                  key={i}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </h2>
            <p className="text-[15px] opacity-[75%] font-light mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              tempora quaerat exercitationem
            </p>
            <div className="text-[30px] font-semibold mt-[30px] underline  ">
              +1 666 777 00 00
            </div>
            <ul className="flex mt-[60px] mb-[30px]">
              <div className="flex justify-left items-center space-x-4">
                {buttons.map(({ id, icon, name }) => (
                  <button
                    key={id}
                    className="relative rounded-full p-2 border-2 ml-5 border-primary text-2xl text-primary
                      transition-colors hover:scale-105 z-[100] 
                      "
                    aria-label={name}
                  >
                    <span className="sr-only">{name}</span>
                    {icon}
                  </button>
                ))}
              </div>
            </ul>
          </div>
        </div>
        <div className="md:col-span-7 col-span-1 flex justify-center items-center">
          <form className="w-full relative z-[100]">
            <div className="grid grid-cols-2 row">
              <div className="col-lg-6 col-span-1 px-4">
                <div className="mb-[30px]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full p-4 bg-transparent border border-white text-white rounded-[5px]
                            transition-all duration-500
                            "
                  />
                </div>
              </div>
              <div className="col-lg-6 col-span-1 px-4">
                <div className="mb-[30px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-4 bg-transparent border border-white text-white rounded-[5px]
                            transition-all duration-500
                            "
                  />
                </div>
              </div>
              <div className="col-12 col-span-2 px-4">
                <div className="mb-[30px]">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full p-4 bg-transparent border border-white text-white rounded-[5px]
                            transition-all duration-500
                            "
                  />
                </div>
              </div>
              <div className="col-12 col-span-2 px-4">
                <div className="mb-[30px]">
                  <textarea
                    name="message"
                    id="form-message"
                    placeholder="Message"
                    rows={4}
                    className="w-full p-4 bg-transparent border border-white text-white rounded-[5px]
                            transition-all duration-500
                            "
                    required
                  ></textarea>
                </div>
                <div className="mt-10" ref={scope}>
                  <div ref={scope}>
                    <button
                      onMouseEnter={onHoverStart}
                      className="w-full relative rounded-full border-2 border-primary px-6 py-2 text-2xl text-primary
                    transition-colors z-[100]
                    "
                    >
                      <span className="sr-only">Send </span>
                      <span
                        className="block h-8 overflow-hidden"
                        aria-hidden="true"
                      >
                        {["S", "e", "n", "d"].map((letter, index) => (
                          <span
                            data-letter={letter}
                            className="relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full
                            after:h-8 after:content-[attr(data-letter)]
                            "
                            key={`${letter}-${index}`}
                          >
                            {letter === " " ? "\u00A0" : letter}{" "}
                          </span>
                        ))}
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
                </div>               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
