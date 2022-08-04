import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './Progress.css'

class StepProgressBar extends React.Component {
  render() {
    return (
<div className="xyz">     <ProgressBar
        percent={67}
        filledBackground="linear-gradient(to right, ##5861AE, ##5861AE)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="./check-mark.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="./check-mark.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ backgroundColor: `#(${accomplished ? 0 : 80})` }}
              width="30"
              src="./check-mark.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="./check-mark.png"
            />
          )}
        </Step>
      </ProgressBar></div>
    );
  }
}
export default StepProgressBar