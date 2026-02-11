import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { gsap } from "gsap";

  export default function Skills() {
    const sectionRef = useRef(null);

    const skills = [
    "HTML & CSS",
    "Tailwind CSS",
    "GSAP",
    "JavaScript",
    "React",
    "redux",
    "react query",
    "Performance Optimization",
    "nodeJs",
    "express js",
    "OOP",
    "problem solving",
    "linux admin 1"
  ];
  useGSAP(
    () => {
      gsap.from("#parentSkills div span", {
        opacity: 0,
        x: 200,
        scale: 0.5,
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    },[]);
    return (
      <section className="py-20" ref={sectionRef} id="skills">
        <h2 className="text-3xl text-center font-bold mb-10 text-cyan-400">
          Skills
        </h2>
        <div
  id="parentSkills"
  className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4"
>
  {skills.map((skill) => (
    <div
      key={skill}
      className="
        group
        relative
        rounded-xl
        p-6
        text-center
        text-slate-300
        font-medium
        bg-slate-800/40
        backdrop-blur-lg
        border border-white/5
        transition-all
        duration-300
        ease-out
        hover:scale-[1.04]
        hover:text-slate-100
        hover:shadow-xl
      "
    >
      <div
        className="
          absolute
          inset-0
          rounded-xl
          bg-gradient-to-br
          from-cyan-500/20
          via-blue-500/20
          to-indigo-500/20
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <span className="relative z-10">{skill}</span>
    </div>
  ))}
</div>

      </section>
    );
  }
  