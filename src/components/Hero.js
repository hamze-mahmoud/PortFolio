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
      delay:.9,
    });

}, []);
  let HM=" Junior Frontend Developer • React"
let characterHM=HM.split("")

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    



    
    
    
      <div className="text-center px-4">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-cyan-400"
        >
          Hamze Montaser Naeem Mahmoud
        </h1>

        <div>

{characterHM.map((el, index) =>
<div key={index} id='CH' style={{display:'inline-block'}}>
<span
  className="
    inline-block
    text-lg md:text-xl
    font-medium
    text-gray-200
    mx-[1px]
    px-1
    backdrop-blur-sm
    bg-white/5
    shadow-sm
    transition-all
    duration-300
    ease-out
    hover:text-cyan-400
    hover:bg-cyan-400/10
    hover:border-cyan-400/30
    hover:-translate-y-[2px]
    hover:shadow-cyan-400/30
  "
>
  {el}
</span>

</div>
)}

</div>
      </div>
      <img
      src={image} // your imported image
      alt="Background"
      className="
        w-80 md:w-96  /* width */
        h-80 md:h-96  /* height */
        object-cover object-center
        rounded-3xl       /* rounded corners */
        shadow-2xl        /* subtle shadow */
        brightness-90      /* slightly darken image */
          srcSet={`${image} 1x, ${highResImage} 2x`}

      "
      loading="lazy"
    />
    </section>
  );
}
