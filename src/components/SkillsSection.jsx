import React from "react";

const SkillsSection =() =>{
    const skills = [
        {
            id:1,
            icon:"https://img.icons8.com/plasticine/100/087ea4/react.png"
        },
        {
            id:2,
            icon:"https://img.icons8.com/fluency/48/vuejs.png"
        },
        {
            id:3,
            icon:"https://img.icons8.com/fluency/48/angularjs.png"
        },
        {
            id:4,
            icon:"https://img.icons8.com/color/48/tailwindcss.png"
        },
        {
            id:5,
            icon:"https://img.icons8.com/fluency/48/figma.png"
        },
        {
            id:6,
            icon:"https://img.icons8.com/fluency/48/html-5.png"
        },
        {
            id:7,
            icon:"https://img.icons8.com/color/48/javascript--v1.png"
        },
    ];
    return(
        <section>
            <div className="w-full flex flex-wrap justify-center p-2 gap-0 lg:gap-24">
                {skills.map(({id,icon}) =>(
                    <figure className="border-2 border-primary backdrop-blur-sm bg-white/30 w-20 h-20 flex 
                    justify-center items-center rounded-full ml-2 mt-2
                    ">
                        <img src={icon} alt="skill" className="w-10 h-12 absolute z-10" />
                    </figure>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;