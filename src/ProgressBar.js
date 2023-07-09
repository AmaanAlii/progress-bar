// Dynamic Progress Bar that grows depending upon the input Percentage.

import React, { useState } from "react";
import "./styles.css";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(10); // State for updating percentage value
  const setValue = (e) => setPercentage(Number(e.target.value)); // Function to set State according to the input
  return (
    <div>
      <div className="container">
        <h1>Dynamic Progress Bar</h1>
        <br></br>
        <div className="bar">
          {percentage >= 0 && percentage <= 100 ? ( // Condition to check whether the input is within range or not
            <div className="progress-bar" style={{ width: `${percentage}%` }}>
              {" "}
              <b>{percentage}%</b>
            </div>
          ) : (
            alert("Please enter a number between 0 and 100")
          )}
        </div>
        <div className="form-container">
          <form>
            <label>
              <h4>Input Percentage</h4>
            </label>
            <input type="number" onChange={setValue} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
