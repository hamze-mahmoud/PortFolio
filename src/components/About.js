import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        x: 200,
        scale: 0.5,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 max-w-4xl mx-auto px-4"
      id="about"
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
        About Me
      </h2>

      <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
      I’m <span className="text-slate-100 font-medium">Hamze Montaser Naeem Mahmoud</span>,
a Junior  Front End Developer passionate about building modern, performant web applications.
I enjoy working across both frontend and backend, crafting clean, scalable code and creating user experiences that feel intuitive, fast, and visually balanced.
</p>

    </section>
  );
}
  