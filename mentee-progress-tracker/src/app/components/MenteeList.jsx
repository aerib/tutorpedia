"use client";

import React from 'react';
import MenteeCard from './MenteeCard';

export default function MenteeList({ mentees, deleteMentee, updateMentee }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {mentees.map((mentee) => (
        <MenteeCard
          key={mentee.id}
          mentee={mentee}
          deleteMentee={deleteMentee}
          updateMentee={updateMentee}
        />
      ))}
    </div>
  );
}
