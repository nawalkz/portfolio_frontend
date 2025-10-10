import { transition } from "three/webgpu";

//NavBar section variables
export const sidebarVariants = {
    open :(height = 1000 ) =>({
        clipPath : `circle(${height * 2 +200}px at 40px 40px)`,
        transition :{
            type : "spring",
            stiffness :20,
            restDelta :2,
        }
    }),

    closed : {
        clipPath:"circle(30px at 40px 40px)",
        transition: {
            delay : 0.5,
            type:"spring",
            stiffness:400,
            damping:40,
        }
    }
}

export const menuItemVariants = {
    open :{
        y:0,
        opacity :1,
        transition:{
            y:{ stiffness : 1000,velocity : -100},
            duration:0.1
        }
    },
    closed :{
        y:30,
        opacity : 0,
        transition:{
            y:{stiffness : 1000}
        }
    }
}

export const navItems = [
    { id:1,title:"Services",href:"#services"},
    { id:2,title:"Why Hire Me ",href:"#whyme"},
    { id:3,title:"Projects",href:"#projects"},
    { id:4,title:"Testimonials",href:"#testimonials"},
    { id:5,title:"Contact Me",href:"#contact"}
];
export const navVariants ={
    open:{
        transition:{ staggerChildren :0.07, delayChildren:0.2 },
    },
    closed :{
        transition:{ staggerChildren :0.05, delayChildren:-1 },
    }
};

//Hero Section variables
export const randomNumberBetween = (min,max)=>{
    return Math.floor(Math.random()*(max-min + 1) +min);
};

export const role ="FULLSTACK DEVELOPER".split("");
export const description ="Junior Full-Stack Developer, graduate in digital development, passionate about creating web and desktop applications.Hands-on experience through academic and personal projects, including library management, meeting management, point of sale systems, and cooperative management.Skilled in HTML, CSS, JavaScript, PHP, Python, and Laravel.Autonomous, detail-oriented, and highly motivated with a strong ability to learn quickly.".split("");
export const name = "Hello , I'm".split("");
export const personeName = "Nawal".split("");

//Services Section Variables

export const services =[
    {
        id:1,
        title:"Ui/Ux Design",
        src:"https://img.icons8.com/ios/50/66c61c/web-design.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cum enim laudantium, laborum libero quasi quisquam facere suscipit voluptat"
    },
    {
        id:2,
        title:"App Development",
        src:"https://img.icons8.com/fluency-systems-regular/50/66c61c/web-apps.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cum enim laudantium, laborum libero quasi quisquam facere suscipit voluptat"
    },
    {
        id:3,
        title:"Web Development",
        src:"https://img.icons8.com/ios/50/66c61c/laptop-coding.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cum enim laudantium, laborum libero quasi quisquam facere suscipit voluptat"
    }
];

export const Variants ={
    offscreen :{
        opacity:0,
        y:-100
    },
    onscreen:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            duration:1
        }
    }
};

export const WhyMeTabs = [
    {label:"Experience"},
    {label:"Education"},
    {label:"Skills"}
];

//Contact Section Variables

export const contactText1 = "Let's make your brand brilliant !".split(" ");