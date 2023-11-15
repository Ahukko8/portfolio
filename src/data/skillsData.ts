import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiSvelte, SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export const skills = {
  frontend: {
    title: "Frontend",
    stacks: [
      {
        stack: "JavaScript",
        icon: IoLogoJavascript,
      },
      {
        stack: "TypeScript",
        icon: SiTypescript,
      },
      {
        stack: "Svelte",
        icon: SiSvelte,
      },
      {
        stack: "React",
        icon: FaReact,
      },
      {
        stack: "NextJs",
        icon: TbBrandNextjs,
      },
    ],
  },
  backend: {
    title: "Backend",
    stacks: [
        {
            stack: "NodeJs",
            icon: FaNodeJs
        },
        {
            stack: "MongoDB",
            icon: SiMongodb
        },
        {
            stack: "ExpressJs",
            icon:   SiExpress
        },
        
    ]
  }
};
