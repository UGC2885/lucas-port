"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaJava, FaPhp } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

// about data

const about = {
    title: "Sobre mim",
    description : "Desenvolvedor FullStack, procurando oportunidades para eternizar meu legado e transformar meu modo de viver.",


  info: [
    {
      fieldName: "Nome",
      fieldValue: "Lucas Bach Unzer" 
    },
    {
      fieldName: "Email",
      fieldValue: "lucas_unzer@hotmail.com"
    },
    {
      fieldName: "Celular",
      fieldValue: "(45) 99824-3023"
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível"
    },
    {
      fieldName: "Linguagens",
      fieldValue: "Inglês, Espanhol"
    },
  ]
}

// experience 

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha experiência",
  description: "Searching...",
  items: [
    // Como não tenho experiências ainda, irei deixar aqui sem nada.
    /* 

    {
       company: "empresa"
       position: "posição na empresa"
       duration: "duração do cargo"
   }, 
   
   */
  ]
}

//Education

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Cursos",
  description: "Estudos variados, desde a lógica de programação, e algoritmos, também estou desenvolvendo minha carteira de tecnologias como, WordPress, Photoshop e design UX/UI. ",
  items: [

    {
      institution: "Univel - Centro Universitário",
      degree: "TADS",
      duration: "2024 - Atualmente",
    },
    {
      institution: "Univel - Centro Universitário",
      degree: "Engenharia Mecânica",
      duration: "2020 - 2023",
    },
    
    {
      institution: "Udemy",
      degree: "FullStack Web HTML, CSS, ECMA17, WordPress, PHP, Ajax, Json",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "Algoritmos e lógica de programação - C, C#, C++, Java, Python",
      duration: "2023-2024",
    },

  ]
}


//skills data
const skills = {
  title: "Habilidades",
  
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js"
    },
  ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvides, TooltipTrigger } from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { TooltipProvider } from "@radix-ui/react-tooltip"


const resume = () => {
  return (
  <motion.div 
  initial={{opacity: 0}} 
  animate={{
    opacity: 1, 
    transition: {
      delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}

    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[280px] mx-auto xl:mx-0 gap-6" >
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Cursos</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">

                <h3 className="text-4xl font-bold">
                  {experience.title}
                  </h3>

                <p className="max-w-[600px] text-white/60 xl:mx-0">
                {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grip-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                        key={index} 
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>




            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">

                <h3 className="text-4xl font-bold">
                  {education.title}
                  </h3>

                <p className="max-w-[600px] text-white/60 xl:mx-0">
                {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grip-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                        key={index} 
                        className="bg-[#232329] h-[230px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"> 
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>



            {/* Sobre */}
            <TabsContent 
            value="about" 
            className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {about.title}
                  </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li 
                      key={index} 
                      className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                       
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default resume