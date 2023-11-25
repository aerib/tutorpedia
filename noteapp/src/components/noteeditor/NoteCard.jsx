"use client";

import { useContext, useState } from "react";
import { NoteContext } from "../provider/NoteProvider";

export const NoteCard = ({ content, index }) => {
  const { deleteNote, changeContent } = useContext(NoteContext);

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => changeContent(index, e.target.value)}
        className="w-full bg-yellow-400 text-black focus:outline-none p-4 text-xs rounded-lg resize-none"
        rows={6}
      ></textarea>
      <button className="bg-rose-500 text-white text-xs font-medium rounded-lg p-2" onClick={() => deleteNote(index)}>
        Delete
      </button>
    </div>
  );
};
