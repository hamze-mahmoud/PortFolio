import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);


  
 useGSAP(() => {
  gsap.from("#ii", {
    y: -20,
    opacity: 0,
    stagger: 0.3,
    duration: 0.5,
    delay: 0.3,
  });
},[]);

  return (
    <div
   

      className=" w-full z-50 backdrop-blur-lg"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="  text-lg"    id='ii' style={{cursor:'pointer'}}>
        <Link to="/">
     
          Hamze
          </Link>
        </h1>
     
    
        <ul className="hidden md:flex gap-8 text-gray-300">
  {["About", "Skills", "Projects", "Contact"].map((item) => (
    <li key={item} id="ii">
      <a
        href={`#${item.toLowerCase()}`}
        className="
          relative
          cursor-pointer
          transition
          duration-300
          hover:text-cyan-400
          after:content-['']
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-cyan-400
          after:transition-all
          after:duration-300
          hover:after:w-full
        "
      >
        {item}
      </a>
    </li>
  ))}
</ul>


     
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>


      {open && (
        <div className="md:hidden bg-slate-900 px-6 pb-4">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <div
              key={item}
              className="py-2 text-gray-300 hover:text-cyan-400"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
