import React, { useState } from "react";
import "./Preloader.css";
import image from "../../files/webload.gif";

function Preloader() {
  const [clas, setClas] = useState("Preloader");
  setTimeout(function () {
    setClas("Preloader hidden");
  }, 1800);
  return (
    <div
      className={clas}
      style={{
        backgroundColor: "#161625",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <img src={image} alt="webarch" />
    </div>
  );
}

export default Preloader;
