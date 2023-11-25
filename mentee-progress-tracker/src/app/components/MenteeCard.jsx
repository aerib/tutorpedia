"use client";

import React from 'react';
import ProgressBar from './ProgressBar';

export default function MenteeCard({ mentee, deleteMentee, updateMentee }) {
  const { fields, id } = mentee;

  const totalScore =
    fields['Task 1 Score'] + fields['Task 2 Score'] + fields['Task 3 Score'];

  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <h2 className="text-lg font-semibold">{fields.Name}</h2>
      <p>Email: {fields.Email}</p>
      <p>Phone: {fields.Phone}</p>
      <ProgressBar
        task1Score={fields['Task 1 Score']}
        task2Score={fields['Task 2 Score']}
        task3Score={fields['Task 3 Score']}
        totalScore={totalScore}
      />
      <button onClick={() => deleteMentee(id)}>Delete</button>
      {/* Add your update functionality here */}
    </div>
  );
}
