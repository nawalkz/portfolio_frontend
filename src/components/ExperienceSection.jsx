import React from "react";

const experiences = [
  {
    id: 1,
    duration: "2025 – Present",
    company: "Ryd Mediatech",
    post: "Web Development Intern",
    description:
      "Developed a management system for a cooperative, including modules for sales, payments, revenues, and archives. Implemented tracking and archiving features using Laravel and MySQL.",
  },
  {
    id: 2,
    duration: "2025",
    company: "École Nationale d’Architecture (ENA)",
    post: "Final-Year Internship – Web Developer",
    description:
      "Created a web application for managing a library, covering books, borrow/return processes, and notifications. Designed a responsive interface using Laravel and Bootstrap.",
  },
];

const ExperienceSection = () => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
      {experiences.map(({ id, duration, company, post, description }) => (
        <div
          className="border-2 border-primary backdrop-blur-sm text-white bg-white/30 p-8 rounded-3xl hover:scale-105 transition-transform duration-300"
          key={id}
        >
          <div className="flex items-center">
            <span className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
              👨‍💻
            </span>
            <h3 className="text-xl font-semibold text-white ml-4">{post}</h3>
          </div>

          <div className="text-base mt-5 space-y-1">
            <p className="text-gray-200 font-medium">{duration}</p>
            <p className="text-gray-300">{company}</p>
          </div>

          {/* ✅ description added here */}
          <p className="text-gray-100 mt-4 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
