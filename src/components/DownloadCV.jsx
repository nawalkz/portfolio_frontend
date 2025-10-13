import React from "react";
import { useAnimate, stagger } from "framer-motion";
import { randomNumberBetween } from "./data/constants";

const DownloadCV = () => {
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
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${window.location.origin}/cv_nawal.pdf`;
    link.download = "cv_nawal.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-20 text-center"
      ref={scope}
    >
      <h2 className="text-3xl font-semibold text-white mb-6">
        Download My CV
      </h2>

      <button
        onMouseEnter={onHoverStart}
        onClick={handleDownload}
        className="relative rounded-full border-2 border-primary px-6 py-2 text-2xl text-primary transition-colors z-[100]"
      >
        <span className="block h-8 overflow-hidden" aria-hidden="true">
          {["D", "o", "w", "n", "l", "o", "a", "d"].map((letter, index) => (
            <span
              data-letter={letter}
              className="relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>

        {/* Sparkles animation */}
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
                3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
              />
            </svg>
          ))}
        </span>
      </button>
    </div>
  );
};

export default DownloadCV;
