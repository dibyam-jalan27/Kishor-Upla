"use client";
import About from "./Sections/About";
import Education from "./Sections/Education";
import Interest from "./Sections/Interest";

export default function Sections() {
  return (
    <>
      <section id="about" className="mb-5 w-full md:h-[calc(100dvh)]">
        <About />
      </section>
      <section id="interest" className="mb-5 h-fit w-full md:h-[calc(100dvh)]">
        <Interest />
      </section>
      <section id="interest" className="mb-5 h-fit w-full md:h-[calc(100dvh)]">
        <Education />
      </section>
    </>
  );
}
