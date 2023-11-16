import { socialLinks } from "@/data/socialLinksData";
import { Heading } from "./Heading";
import Image from "next/image";


export function AboutMe() {
  return (
    <>
      <section className="scroll-mt-28 " id="about">
        <Heading
          title="About Me"
          desc="Know more about me."
        />

        <div className="flex gap-4 flex-col md:flex-row items-center">
          <div className="h-80 w-80 shrink-0 bg-zinc-800  overflow-hidden rounded-full">
            <Image
              src={"/bg2.jpg"}
              alt={"bg"}
              width={600}
              height={600}
              className="w-full h-full object-top object-cover"
            />
          </div>

          <div className="space-y-2">
            <p className=" text-sm">Hi, I am Ahusan.</p>
            <p className=" text-base md:text-md text-zinc-400 text-justify  ">Currently residing at Ha. Kelaa, born and raised in the capital city. I am a self taught developer who is enthusiastic and passionate about the tech world. Problem solving and critical thinking are integral to my daily routine, forming a seamless part of my everyday activities. Consequently, these skills contribute significantly to my proficiency as a coder.</p>
            <ul className=" flex-wrap bg-zinc-800/50 border border-zinc-800 p-4 inline-flex items-center gap-4 justify-center rounded-md" >
            {socialLinks.map(({title, icon:Icon}, index) =>{
              return(
                <li key={index} className="flex flex-row gap-5">
                  <Icon className="text-xl shrink-0"/>{title}
                </li>
              )
            })}  
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
