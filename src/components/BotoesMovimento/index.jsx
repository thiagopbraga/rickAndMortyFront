import React from "react";
import { Botoes } from "./styles";
import { useDados } from "../../contexts/PageContext";
import { api } from "../../Api/api";
import axios from "axios";

export const BotoesMovimento = () => {
  const { nextPage, setNextPage, prevPage, setPrevPage, setCharacters } =
    useDados();

  const handleNextPage = async () => {
    const response = await axios.get(nextPage);
    setCharacters(response.data.results);
    setNextPage(response.data.info.next);
    setPrevPage(response.data.info.prev);
  };

  const handlePrevPage = async () => {
    const response = await axios.get(nextPage);
    setCharacters(response.data.results);
    setNextPage(response.data.info.next);
    setPrevPage(response.data.info.prev);
  };

  return (
    <Botoes>
      <button onClick={handlePrevPage}>Anterior</button>
      <button onClick={handleNextPage}>Próximo</button>
    </Botoes>
  );
};
