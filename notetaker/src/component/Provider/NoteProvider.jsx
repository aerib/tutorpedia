"use client";

import { createContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [data, setData] = useState("");

  function handleSetData(value) {
    setData(value);
  }

  return <NoteContext.Provider value={{ data, handleSetData }}>{children}</NoteContext.Provider>;
};
