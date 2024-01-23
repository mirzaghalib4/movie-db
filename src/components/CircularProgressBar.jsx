import React from "react";

export const CircularProgressBar = ({ percent, width, height }) => {
  const style = {
    width: width,
    height: height,
    background: `radial-gradient(closest-side, #081C22 82%, transparent 89% 100%), conic-gradient(#21d07a ${percent}%, #20452E 0)`,
  };
  return (
    <div
      style={style}
      className="progress-bar"
      role="progressbar"
      aria-valuenow={percent}
      aria-valumin="0"
      aria-valuemax="100"
    >
      {percent}<sup>%</sup>
    </div>
  );
};
