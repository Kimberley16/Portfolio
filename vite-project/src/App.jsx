import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

// function App() {
//   return (
//     <>
//       <h1 class="text-3xl font-bold underline">Hello world!</h1>
//       <motion.div
//         style={{
//           color: "green",
//           fontSize: 20,
//           width: "300px",
//           height: "30px",
//           textAlign: "center",
//           border: "2px solid green",
//           margin: "40px",
//         }}
//         whileHover={{ scale: 0.5 }}
//       >
//         Porfolio
//       </motion.div>
//     </>
//   );
// }

// export default App;
