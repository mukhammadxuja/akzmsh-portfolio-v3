import React, { createContext, useState } from "react";

interface ICursorManager {
    size: string;
    setSize?: (value: number) => void;
}

export const CursorContext = createContext({
  size: "small",
  setSize: () => {},
});
export default function CursorManager(props) {
  const [size, setSize] = useState("small");
  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {props.children}
    </CursorContext.Provider>
  );
}