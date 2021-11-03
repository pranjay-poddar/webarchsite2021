import React from "react";
import "./Preloader.css";

function Preloader() {
  return (
    <div
      className="Preloader"
      style={{
        backgroundColor: "#161625",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        height: "100%"
      }}
    >
      <img className="hiddenPreloader" src="https://tyracatr.sirv.com/Images/webload.gif" alt="webarch" />
    </div>
  );
}

export default Preloader;
