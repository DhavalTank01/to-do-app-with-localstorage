import React from "react";

const Footer = () => {
  return (
    <>
      <div className="navbar bg-light d-flex justify-content-center align-items-center flex-wrap">
        <h4 className="text-capitalize text-center">© ToDo @ {new Date().getFullYear()} All Rights Reserved</h4>
      </div>
    </>
  );
};

export default Footer;
