import React from "react";

function SectionHead({ children, direction }) {
  return (
    <div className={`flex ${direction === "reverse" ? "flex-row-reverse" : ""}`}>
      <h2 className="mb-10 font-semibold text-gray-800 text-lg px-2 uppercase bg-gray-300 rounded w-fit ">
        {children}
      </h2>
    </div>
  );
}

export default SectionHead;
