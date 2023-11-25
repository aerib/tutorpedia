"use client";

import { NoteContext } from "../provider/NoteProvider";
import { useContext } from "react";
import React from "react";
import { Plus } from "lucide-react";

export const NoteHeader = () => {
  const { addNote } = useContext(NoteContext);

  return (
    <div className="flex justify-between py-6">
      <div>Noteme.</div>
      <div>
        <Plus onClick={addNote} />
      </div>
    </div>
  );
};
