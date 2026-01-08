import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../Navbar";
import Slider from "../slider/Slider";
// Images
const importAll = (r) => r.keys().map(r);

// Import all images from the folder
const images = importAll(
  require.context('../Images/images-invoice-generator', false, /\.(png|jpe?g|svg)$/)
);

export default function Invoice_generator() {
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


      {/* ================= TEXT (RIGHT) ================= */}
<div className="col-span-12 md:col-span-5 space-y-6 text-gray-300">

<span className="inline-block text-sm text-cyan-400 tracking-widest uppercase">
  Real-World Company Project
</span>

<h2 className="text-4xl font-bold text-white leading-tight">
  Invoice Generator System
</h2>

<p className="text-gray-400 leading-relaxed">
  This project was developed in collaboration with
  <span className="text-white font-medium"> Xario Tech </span>
  as a professional invoice generation system.
  I worked on the project as a
  <span className="text-cyan-400"> Full Stack Developer</span>,
  contributing to both frontend and backend development.
</p>

<p className="text-gray-400 leading-relaxed">
  The frontend was built using
  <span className="text-cyan-400"> React</span>,
  <span className="text-cyan-400"> Tailwind CSS</span>, and
  <span className="text-cyan-400"> GSAP</span>,
  focusing on a modern, responsive UI with smooth animations
  and an intuitive user experience.
</p>

<p className="text-gray-400 leading-relaxed">
  On the backend, I implemented a robust API using
  <span className="text-cyan-400"> FastAPI</span>,
  <span className="text-cyan-400"> PostgreSQL</span>, and
  <span className="text-cyan-400"> SQLAlchemy</span>.
  The system supports secure authentication and authorization
  using
  <span className="text-cyan-400"> Clerk</span>,
  and integrates with the
  <span className="text-cyan-400"> Gmail API</span>
  to automatically send generated invoice PDFs to clients via email.
</p>

<p className="text-gray-400 leading-relaxed">
  I also implemented dynamic
  <span className="text-cyan-400"> PDF generation</span>
  for invoices, enabling businesses to create, manage,
  and deliver professional invoices efficiently.
  This project strengthened my experience in building
  scalable, production-ready web applications.
</p>

</div>

         
       
      </div>
    </section>
    </>

  );
}
