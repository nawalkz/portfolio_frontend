import React from "react";
const experiences = [
    {
        id:1,
        duration:"03/2000 - 07/2011",
        company:"spotify",
        post:"Software Engineer"
    },
    {
        id:2,
        duration:"03/2000 - 07/2011",
        company:"spotify",
        post:"Software Engineer"
    },
    {
        id:3,
        duration:"03/2000 - 07/2011",
        company:"spotify",
        post:"Software Engineer"
    }
];

const ExperienceSection = () =>{
    return(
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
            {experiences.map(({id,duration,company,post}) =>(
                <div className="border-2 border-primary backdrop-blur-sm text-white bg-white/30 p-8 rounded-3xl"
                key={id}
                >
                    <div className="flex items-center">
                        <span className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
                            👨‍💻
                        </span>
                        <h3 className="text-xl font-semibold text-white ml-4">{post}</h3>
                    </div>
                    <div className="text-base mt-5">
                        <p>{duration}</p>
                        <p>{company}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ExperienceSection;