import React, { useState } from "react";
import "./Preloader.css";
import image from "../../files/webload.gif";

function Preloader() {
  const [fadeClass, setFadeClass] = useState("Preloader");
  setTimeout(function () {
    setFadeClass("Preloader hidden");
  }, 2000);
  return (
    <div
      className={fadeClass}
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