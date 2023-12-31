"use client";

import { useContext } from "react";
import { NoteContext } from "../provider/NoteProvider";
import { NoteCard } from "./NoteCard";

export const NotePreview = () => {
  const { notes } = useContext(NoteContext);

  notes.map(({ indexbody }) => {});

  return (
    <div className="grid grid-cols-2 gap-6">
      {notes.map(({ body }, index) => {
        return <NoteCard key={index} content={body} index={index} />;
      })}
    </div>
  );
};
