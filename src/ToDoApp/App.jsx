import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Todo from "./Todo";
const ToDoApp = () => {
  return (
    <>
      <NavBar />
      <Todo />
      <Footer />
    </>
  );
};

export default ToDoApp;
