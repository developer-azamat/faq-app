import React from "react";
import './Loader.css'

function Loader() {
  return (
    <div className="w-screen h-screen bg-[#f1f4f164] fixed flex items-center justify-center ">
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
