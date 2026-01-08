import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import E_commerce from "./components/projects/E_commerce";
import Invoice_generator from "./components/projects/Invoice_generator";
import Admin_order_mangment from "./components/projects/Admin_order_mangements";
function App() {
  return (
    <>
          <Routes>
<Route path="/" element={
  <>

    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />

</>}
      
   
       />

        <Route
          path="/projects/ecommerce"
          element={<E_commerce title="E-Commerce Platform" />}
        />
        <Route
          path="/projects/invoice-generator"
          element={<Invoice_generator title="Invoice Generator" />}
        />
        <Route
          path="/projects/order-management"
          element={<Admin_order_mangment title="Admin Order Management" />}
        />
      
      </Routes>
    </>
  );
}

export default App;
