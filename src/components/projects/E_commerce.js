import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../Navbar";
import Slider from "../slider/Slider";
const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context('../Images/images-E-commerce', false, /\.(png|jpe?g|svg)$/)
);

export default function E_commerce() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.to(trackRef.current, {
      xPercent: -index * 100,
      duration: 0.9,
      ease: "power3.inOut",
    });
  }, [index]);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <>
        <Navbar />

    <section
      ref={sectionRef}
      className="py-28 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-16 items-center">

        {/* ================= SLIDER (LEFT) ================= */}
        <Slider images={images} next={next} prev={prev}  trackRef={trackRef} />

        {/* ================= TEXT (RIGHT) ================= */}
        <div className="col-span-12 md:col-span-5 space-y-6 text-gray-300">

          <span className="inline-block text-sm text-cyan-400 tracking-widest uppercase">
            Graduation Project
          </span>

          <h2 className="text-4xl font-bold text-white leading-tight">
            E-Commerce Web Application
          </h2>

          <p className="text-gray-400 leading-relaxed">
            This project is my <span className="text-white font-medium">
              first complete web application
            </span>, developed from scratch as my graduation project.
            I designed and built the entire system using
            <span className="text-cyan-400"> JavaScript</span> and
            <span className="text-cyan-400"> Bootstrap</span>, focusing on
            clean UI, usability, and responsive design.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I integrated real backend data using
            <span className="text-cyan-400"> Axios</span> to consume APIs,
            handle HTTP requests, and manage dynamic product content,
            which gave me practical experience in real-world API
            communication.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Through this project, I learned how to plan features,
            structure code, debug problems, and improve performance —
            marking my first step into professional web development.
          </p>

        </div>
      </div>
    </section>
    </>

  );
}
