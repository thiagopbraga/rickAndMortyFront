import React, { createContext, useState, useContext } from "react";

const PageContext = createContext();

export default function PageProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  return (
    <PageContext.Provider
      value={{
        characters,
        setCharacters,
        nextPage,
        setNextPage,
        prevPage,
        setPrevPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function useDados() {
  const context = useContext(PageContext);
  const {
    characters,
    setCharacters,
    nextPage,
    setNextPage,
    prevPage,
    setPrevPage,
  } = context;
  return {
    characters,
    setCharacters,
    nextPage,
    setNextPage,
    prevPage,
    setPrevPage,
  };
}
