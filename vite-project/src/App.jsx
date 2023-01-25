import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <motion.div
        style={{
          color: "green",
          fontSize: 20,
          width: "300px",
          height: "30px",
          textAlign: "center",
          border: "2px solid green",
          margin: "40px",
        }}
        whileHover={{ scale: 0.5 }}
      >
        Porfolio
      </motion.div>
    </>
  );
}

export default App;
