import React from "react";
import "./snackbar.css";

const Snackbar = ({ props }) => {
  return (
    <div className="snackbar">
      <p> {props}</p>
    </div>
  );
};

export default Snackbar;
