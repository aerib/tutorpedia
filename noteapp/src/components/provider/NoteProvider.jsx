"use client";

import { createContext, useState, useEffect } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]); // [newNote, newNote, newNote]

  function addNote() {
    // 1. bikin shallow copy
    // 2. bikin newNote baru
    // 3. newNote baru di push ke shallow copy
    // 4. setNotes
    // 5. simpan ke local storage
    const newNotes = [...notes];
    const newNote = {
      body: "",
    };
    newNotes.push(newNote);
    setNotes(newNotes);
    // built-in fc dari javascript
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function deleteNote(index) {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function changeContent(index, newContent) {
    const newNotes = [...notes];
    const newNote = {
      body: newContent,
    };
    newNotes.splice(index, 1, newNote);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  useEffect(() => {
    const data = localStorage.getItem("notes");
    const currentNotes = JSON.parse(data);
    setNotes(currentNotes);
  }, []);

  return <NoteContext.Provider value={{ notes, addNote, deleteNote, changeContent }}>{children}</NoteContext.Provider>;
};
