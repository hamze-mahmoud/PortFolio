import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import image from "./Images/personal-photo/hamze.jpg"
export default function Hero() {
  const titleRef = useRef();

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });
  useGSAP(() => {
    gsap.from("#CH", {
      y:-20,
      stagger: 0.1,
      duration: 0.4,
      opacity: 0,
      scale:0,
      delay:1,
    });

}, []);
  let HM=" Junior- FrontEnd- Developer"
let characterHM=HM.split("")
  return (
    <section className="
  min-h-screen
  flex flex-col-reverse md:flex-row
  items-center
  justify-center
  gap-10
  px-6
  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
">
  {/* ================= TEXT ================= */}
  <div className="text-center md:text-left max-w-xl">
    <h1
      ref={titleRef}
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400"
    >
      Hamze Montaser Naeem Mahmoud
    </h1>

    <div className="mt-4 flex flex-wrap justify-center md:justify-start">
      
      
      
      {characterHM.map((el, index) => (
       <div key={index} id='CH' style={{display:'inline-block',}}>
            
        <span
            key={index}
            className="
              inline-block
              text-base md:text-xl
              font-larger
              
              bg-blue
            px-1%
              bg-white/20 
              transition-all
              duration-300
              hover:text-cyan-400
              hover:bg-cyan-400/20
              hover:-translate-y-1
              hover:shadow-cyan-400/40
            "
          >
            {el}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* ================= IMAGE ================= */}
  <div className="flex justify-center">
    <img
      src={image}
      alt="Hamze"
      loading="lazy"
      className="
        w-56 h-56
        sm:w-72 sm:h-72
        md:w-96 md:h-96
        object-cover
        object-center
        rounded-3xl
        shadow-2xl
        brightness-90
      "
    />
  </div>
</section>

  );
}
