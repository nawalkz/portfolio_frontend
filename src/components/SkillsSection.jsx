import React from "react";

const SkillsSection = () => {
  const skills = [
    // 🧠 Programming Languages
    { id: 1, icon: "https://img.icons8.com/color/96/000000/python--v1.png" },
    { id: 2, icon: "https://img.icons8.com/officel/80/php-logo.png" },
    { id: 3, icon: "https://img.icons8.com/color/96/javascript--v1.png" },
    { id: 4, icon: "https://img.icons8.com/color/96/html-5--v1.png" },
    { id: 5, icon: "https://img.icons8.com/color/96/css3.png" },

    // ⚙️ Frameworks & Libraries
    { id: 6, icon: "https://img.icons8.com/fluency/96/laravel.png" },
    { id: 7, icon: "https://img.icons8.com/plasticine/100/087ea4/react.png" },
    { id: 8, icon: "https://img.icons8.com/color/96/bootstrap.png" },

    // 🗄️ Databases
    { id: 9, icon: "https://img.icons8.com/fluency/96/mysql-logo.png" },
    { id: 10, icon: "https://img.icons8.com/color/96/mongodb.png" },

    // 🧩 Tools & Versioning
    { id: 11, icon: "https://img.icons8.com/color/96/git.png" },
    { id: 12, icon: "https://img.icons8.com/color/96/github--v1.png" },
    { id: 13, icon: "https://img.icons8.com/color/96/jira.png" },

    // 🚀 Méthodology
    { id: 14, icon: "https://img.icons8.com/color/96/scrum.png" },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        ⚡ Technical Skills
      </h2>
      <div className="w-full flex flex-wrap justify-center p-2 gap-6 lg:gap-12">
        {skills.map(({ id, icon }) => (
          <figure
            key={id}
            className="border-2 border-primary backdrop-blur-sm bg-white/30 w-20 h-20 flex justify-center items-center rounded-full hover:scale-110 transition-transform duration-300"
          >
            <img src={icon} alt="skill" className="w-12 h-12" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
