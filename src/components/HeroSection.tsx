import { CustomLink } from "./CustomLink";

export function HeroSection() {
  return (
    <>
      <section className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px]">
        <div>
          <p className="text-lg mb-1">Hello, I am</p>
          <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">Ibrahim Ahusan Mohamed</h1>
          <p>
            As a self-taught aspiring developer, I am passionate about crafting
            innovative solutions through code. Eager to broaden my experience, I
            actively seek opportunities for both work and training to enhance my
            skills and contribute to the ever-evolving tech landscape.
          </p>
          <CustomLink href={"About Me"}>About Me</CustomLink>
        </div>
      </section>
    </>
  );
}
