import Image from "next/image";
import { CustomLink } from "./CustomLink";

export function HeroSection() {
  return (
    <>
      <section
        id="home"
        className=" scroll-mt-28 grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px]"
      >
        <div>
          <p className="text-lg mb-1">Hello, I am</p>
          <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">
            Ibrahim Ahusan Mohamed
          </h1>
          <p className="text-zinc-300 mt-2  text-justify mr-2">
            A self-taught aspiring developer, I am passionate about crafting
            innovative solutions through code. Eager to broaden my experience, I
            actively seek opportunities for both work and training to enhance my
            skills and contribute to the ever-evolving tech landscape.
          </p>
          <CustomLink href={"About Me"} className="mt-4">
            About Me
          </CustomLink>
        </div>
        <div className="hidden md:flex w-full h-full relative overflow-hidden">
          <Image
            alt="pp"
            src="/pp1.png"
            width={600}
            height={600}
            className="object-cover object-top w-full h-full self-end"
          />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        </div>
      </section>
    </>
  );
}
