import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 flex justify-center"
      
    >
      <div
        ref={cardRef}
        className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 text-center max-w-md w-full shadow-lg"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-6">
          Let’s build something great together.
        </p>

        <div className="space-y-3 text-gray-200 text-sm">
          <p className="hover:text-cyan-400 transition">
            📧 hamze.mahmoud.2000@gmail.com
          </p>
          <p className="hover:text-cyan-400 transition">
            📞 +970 595 296 414
          </p>
          <p className="hover:text-cyan-400 transition">
            📍 Tulkarem, Palestine
          </p>
        </div>
      </div>
    </section>
  );
}
