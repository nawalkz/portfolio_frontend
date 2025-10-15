import React from "react";
import { useAnimate, stagger } from "framer-motion";
import { randomNumberBetween } from "./data/constants";

const PersonalSkills = () => {
  const [scope, animate] = useAnimate();

  // ✨ Effet des étincelles (sparkles)
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
      { duration: 0.4, at: "<" },
    ]);

    const sparklesFadeOut = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      { opacity: 0, scale: 0 },
      { duration: 0.3, at: "<" },
    ]);

    const sparklesReset = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      { x: 0, y: 0 },
      { duration: 0.000001 },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["div.skill", { scale: 1.1 }, { duration: 0.2, at: "<" }],
      ["div.skill", { scale: 1 }, { duration: 0.2 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <section
      id="personal-skills"
      className="flex flex-col items-center justify-center py-20 text-center text-white"
      ref={scope}
    >
      <h2 className="text-4xl font-bold mb-8 text-primary">
         My Personal Qualities
      </h2>

      <p className="max-w-2xl text-lg text-gray-300 mb-12">
        I’m a <span className="text-primary font-semibold">serious</span> and{" "}
        <span className="text-primary font-semibold">motivated</span> person who
        always strives to give her best.{" "}
        and always
        stay <span className="text-primary font-semibold">organized</span> and{" "}
        <span className="text-primary font-semibold">creative</span> in my work.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {[
          "Sérieuse",
          "Motivée",
          "Créative",
          "Organisée",
          "Esprit d’équipe",
          "Responsable",
          "Ponctuelle",
          "Autonome",
        ].map((skill, index) => (
          <div
            key={index}
            onMouseEnter={onHoverStart}
            className="skill relative border-2 border-primary rounded-full py-3 px-6 text-primary font-medium hover:bg-primary hover:text-black transition duration-300 cursor-pointer"
          >
            {skill}

            {/* Sparkles */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 block"
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <svg
                  className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${i}`}
                  key={i}
                  viewBox="0 0 122 117"
                  width={10}
                  height={10}
                >
                  <path
                    className="fill-primary"
                    d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,
                    74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,
                    116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,
                    3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                  />
                </svg>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalSkills;
