"use client";

import { useContext } from "react";
import { NoteContext } from "../provider/NoteProvider";
import { NoteCard } from "./NoteCard";

export const NotePreview = () => {
  const { notes } = useContext(NoteContext);
  // Check if notes is null or undefined before mapping
  if (!notes) {
    return null; // or display a loading state, error message, or any other suitable UI
  }
  // notes.map(({ indexbody }) => {});

  return (
    <div className="grid grid-cols-2 gap-6">
      {notes.map(({ body }, index) => {
        return <NoteCard key={index} content={body} index={index} />;
      })}
    </div>
  );
};
