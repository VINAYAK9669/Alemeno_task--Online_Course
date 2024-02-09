import React from "react";

function Spinner() {
  return (
    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <button type="button" className="bg-red-500 px-3 py-2" disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Loading...
      </button>
    </div>
  );
}

export default Spinner;
