import React from 'react';

export default function ProblemStatements() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Problem Statements</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Problem Statement 1</h2>
          <p className="text-gray-700">
            Detailed description of the first problem statement for the hackathon.
            Provide clear context, challenges, and potential areas of innovation.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Problem Statement 2</h2>
          <p className="text-gray-700">
            Detailed description of the second problem statement for the hackathon.
            Outline the specific goals and expected outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
