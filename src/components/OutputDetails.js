import React from "react";

const OutputDetails = ({ outputDetails, isCorrect }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <div>
        {isCorrect ? (
          <span style={{ color: "#ec297b", fontWeight:"bold" }}>Correct!</span>
        ) : (
          <span style={{ color: "#2b388f", fontWeight:"bold" }}>Wrong Answer</span>
        )}
      </div>
      <p className="text-sm">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
