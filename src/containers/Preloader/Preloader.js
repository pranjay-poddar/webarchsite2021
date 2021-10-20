import React from "react";
import image from "../../files/webload.gif";

function Preloader() {
  return (
    <div
      style={{
        backgroundColor: "#161625",
        
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