import React from "react";
import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Todo from "./Todo";
const App = () => {
  return (
    <>
      <NavBar />
      <Todo />
      <Footer />
    </>
  );
};

export default App;
