"use client";

import React from 'react';

export default function ProgressBar({
  task1Score,
  task2Score,
  task3Score,
  totalScore,
}) {
  const calculatePercentage = (score, total) => (score / total) * 100;

  return (
    <div className="mt-4">
      <div className="flex items-center mb-2">
        <span className="w-1/4">Task 1:</span>
        <progress
          className="w-3/4 bg-gray-200 rounded-full"
          value={task1Score}
          max={totalScore}
        ></progress>
      </div>
      <div className="flex items-center mb-2">
        <span className="w-1/4">Task 2:</span>
        <progress
          className="w-3/4 bg-gray-200 rounded-full"
          value={task2Score}
          max={totalScore}
        ></progress>
      </div>
      <div className="flex items-center mb-2">
        <span className="w-1/4">Task 3:</span>
        <progress
          className="w-3/4 bg-gray-200 rounded-full"
          value={task3Score}
          max={totalScore}
        ></progress>
      </div>
    </div>
  );
}
