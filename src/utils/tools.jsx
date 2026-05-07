import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi"
import { FaGit, FaGitAlt, FaGithub, FaGitSquare, FaReact } from "react-icons/fa"
import { FaFigma } from "react-icons/fa"
import { RxVercelLogo } from "react-icons/rx"

export const toolsTech = [
    {
        name: "ReactJS",
        description: "Frontend Development.",
        icon: <FaReact />,
    },
    {
        name: "Figma",
        description: "Interface Design, Collaboration and Prototyping.",
        icon: <FaFigma />,
    },
    {
        name: "Tailwind CSS",
        description: "CSS Styling",
        icon: <BiLogoTailwindCss />,
    },
    {
        name: "Git",
        description: "Version control and Collaboration.",
        icon: <FaGitAlt />,
    },
    {
        name: "MongoDB",
        description: "Database management tool",
        icon: <BiLogoMongodb />,
    },
    {
        name: "Vercel",
        description: "Web app hosting",
        icon: <RxVercelLogo />,
    },
]