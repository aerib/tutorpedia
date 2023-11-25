"use client";

import { useContext } from "react";
import { NoteContext } from "../Provider/NoteProvider";

export const NotePreview = () => {
    const { data } = useContext(NoteContext);

    return <div>{data}</div>;
  };