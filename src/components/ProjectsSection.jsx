import React, { useState } from "react";
import { motion } from "framer-motion";
import { Variants } from "./data/constants";

const ProjectsSection = () => {
 const projects = [
  {
    id: 1,
    title: "Point of Sale (POS) System",
    description:
      "Developed a desktop-style web application to manage product sales, orders, and payments. Implemented stock tracking and transaction history using Laravel and MySQL.",
    picture: "/image.png",
    tools: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "Built a web platform for managing books, borrowing and returning processes, and user notifications. Created an intuitive dashboard with Laravel and Bootstrap.",
    picture: "/image1.png",
    tools: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
  },
  {
    id: 3,
    title: "Meeting Management Platform",
    description:
      "Designed and developed a platform to organize meetings, manage users, rooms, and notifications. Integrated a dynamic filtering system for efficient management.",
    picture: "/image2.png",
    tools: ["Laravel", "MySQL", "TailwindCSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Travel Management Application",
    description:
      "Developed a collaborative web application for managing travel planning, including dynamic filters and booking features. Built a responsive interface for user interaction.",
    picture: "/image3.png",
    tools: ["Laravel", "Bootstrap", "AJAX", "MySQL"],
  },
  {
    id: 5,
    title: "Cooperative Management System",
    description:
      "Created a complete management system for a cooperative covering sales, payments, revenues, and archives. Implemented advanced data tracking and archiving features using Laravel and MySQL.",
    picture: "/image4.png",
    tools: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
  },
];
  const [[page], setPage] = useState([0, 0]);

  const projectIndex = (page + projects.length) % projects.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <div id="projects" className="container max-w-screen-xl mx-auto mt-40 px-4">
      <motion.h1
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        My Projects
      </motion.h1>
      <div
        key={page}
        className="w-full flex flex-col items-center mt-20 border-2 border-primary bg-white/30 p-8 
      rounded-3xl"
      >
        <div className="w-full justify-end flex z-[100] relative">
          <button
            className="text-white text-3xl"
            onClick={() => paginate(-1)}
            aria-label="Previous Slide"
          >
            <img
              width={50}
              height={50}
              src="https://img.icons8.com/ios-filled/50/66c61c/circled-chevron-left.png"
              alt="circled-chevron-left"
            />
          </button>
          <button
            className="text-white text-3xl"
            onClick={() => paginate(1)}
            aria-label="Next Slide"
          >
            <img
              width={50}
              height={50}
              src="https://img.icons8.com/ios-filled/50/66c61c/circled-chevron-right.png"
              alt="circled-chevron-right"
            />
          </button>
        </div>
        {/**Project Image */}
        <img src={projects[projectIndex].picture} alt={projects[projectIndex].title} 
        className="max-w-[100%] md:max-w-[100%] h-[200px] md:h-[400px] object-cover rounded-lg"
        />

        {/**Project Title */}
        <h2 className="text-white text-3xl mt-4 font-semibold">
        {projects[projectIndex].title} 
        </h2>

        {/**Project Description */}
        <p className="text-white mt-2 text-lg text-center max-w-lg">
        {projects[projectIndex].description} 
        </p>

        {/**Tools Used */}
        <div className="text-primary text-md mt-2 font-bold">
            <strong className="mr-5"> Tools :</strong>
            {projects[projectIndex].tools.join(", ")} 
        </div>

        <div className="flex justify-center mt-10 z-[100] relative">
            {projects.map((_,index) =>(
                <div key={index} className={`w-3 h-3 rounded-full mx-1 ${
                    index === projectIndex ? "bg-primary":"bg-white/50"
                }`}></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;