import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../Navbar";
import Slider from "../slider/Slider";
// Images
const importAll = (r) => r.keys().map(r);

// Import all images from the folder
const images = importAll(
  require.context('../Images/images-order-system', false, /\.(png|jpe?g|svg)$/)
);

export default function Admin_order_mangements() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  // Slider animation
  useGSAP(() => {
    gsap.to(trackRef.current, {
      xPercent: -index * 100,
      duration: 0.9,
      ease: "power3.inOut",
    });
  }, [index]);

  // Section entrance animation
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

      <Slider images={images} next={next} prev={prev}  trackRef={trackRef} />


<div className="col-span-12 md:col-span-5 space-y-6 text-gray-300">

<span className="inline-block text-sm text-cyan-400 tracking-widest uppercase">
  Real-World Data Processing Project
</span>

<h2 className="text-4xl font-bold text-white leading-tight">
  Product Data Extraction & Management System
</h2>

<p className="text-gray-400 leading-relaxed">
  This project was developed as a real-world system focused on
  processing and managing product data.
  I worked on this project as a
  <span className="text-cyan-400"> Full Stack Developer</span>,
  responsible for designing and implementing both the frontend
  and backend architecture.
</p>

<p className="text-gray-400 leading-relaxed">
  The frontend was built using
  <span className="text-cyan-400"> React</span> and
  <span className="text-cyan-400"> Tailwind CSS</span>,
  with an emphasis on clean UI, responsive layouts,
  and a smooth user experience for managing extracted data.
</p>

<p className="text-gray-400 leading-relaxed">
  On the backend, I developed RESTful APIs using
  <span className="text-cyan-400"> Node.js</span> and
  <span className="text-cyan-400"> MongoDB</span>,
  enabling efficient storage, retrieval, and manipulation
  of product data within the database.
</p>

<p className="text-gray-400 leading-relaxed">
  A key feature of this system is the ability to
  <span className="text-cyan-400"> extract data from files</span>
  such as
  <span className="text-cyan-400"> Word</span>,
  <span className="text-cyan-400"> PDF</span>, and
  <span className="text-cyan-400"> Excel</span>.
  The extracted data is processed, validated, and transformed
  into structured
  <span className="text-cyan-400"> product records</span>
  stored in the database.
</p>

<p className="text-gray-400 leading-relaxed">
  This project enhanced my experience in building
  data-driven applications, handling file processing pipelines,
  and designing scalable systems that convert unstructured data
  into meaningful business information.
</p>

</div>


         
       
      </div>
    </section>
    </>

  );
}
