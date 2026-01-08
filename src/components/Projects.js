import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "React-based online store with admin dashboard",
    path: "/projects/ecommerce",
  },
  {
    title: "Invoice Generator",
    desc: "PDF invoices with email sharing and client-side management",
    path: "/projects/invoice-generator",
  },
  {
    title: "Admin Order Management",
    desc: "Store and extract products from multiple file types",
    path: "/projects/order-management",
  },
  {
    title: "Book Management System",
    desc: "Image uploads with Cloudinary and full client services",
    path: "/projects/book-management",
  },
];

  

export default function Projects() {

  return (
    <section className="py-20 bg-slate-900" id="projects">
      <h2 className="text-3xl text-center font-bold mb-10 text-cyan-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {projects.map((p) => (
          <Link
            key={p.title}
            to={p.path}
            className="
              group
              bg-slate-800/40
              backdrop-blur-xl
              rounded-xl
              p-6
              border border-white/5
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:border-cyan-400/30
              hover:shadow-xl
            "
          >
            <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition">
              {p.title}
            </h3>

            <p className="mt-2 text-slate-400">
              {p.desc}
            </p>

           {p.title==="Book Management System"? <span className="inline-block mt-4 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition">still buliding ...</span> :  <span className="inline-block mt-4 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition">
              View Project →
            </span>
}

          </Link>
        ))}
      </div>
    </section>
  );
}

  