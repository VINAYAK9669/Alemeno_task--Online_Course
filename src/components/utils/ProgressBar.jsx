/* eslint-disable react/prop-types */
import React from "react";

function ProgressBar({ courseCompleted }) {
  let progress;
  if (courseCompleted) {
    progress = 100;
  } else {
    progress = Math.floor(Math.random() * (80 - 20 + 1) + 20);
  }

  let width = `${progress}%`;

  return (
    <div className="h-4 bg-gray-200 w-full rounded-full overflow-hidden mt-2 mb-2">
      <div className="h-full bg-blue-500" style={{ width }}></div>
    </div>
  );
}

export default ProgressBar;
