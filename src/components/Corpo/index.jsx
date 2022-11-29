import React from "react";
import { api } from "../../Api/api";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import { useDados } from "../../contexts/PageContext";
import { Botoes } from "./styles";
import axios from "axios";

const Corpo = () => {
  const {
    characters,
    setCharacters,
    nextPage,
    setNextPage,
    prevPage,
    setPrevPage,
  } = useDados();

  const handleNextPage = async () => {
    const response = await axios.get(nextPage);
    setCharacters(response.data.results);
    setNextPage(response.data.info.next);
    setPrevPage(response.data.info.prev);
    console.log("nextPage", nextPage);
    console.log("prevPage", prevPage);
  };

  const handlePrevPage = async (prev) => {
    const response = await axios.get(prev);
    setCharacters(response.data.results);
    setNextPage(response.data.info.next);
    setPrevPage(response.data.info.prev);
    console.log("nextPage", nextPage);
    console.log("prevPage", prevPage);
  };

  const getData = async () => {
    const response = await api.get("/character");
    setCharacters(response.data.results);
    setNextPage(response.data.info.next);
    setPrevPage(response.data.info.prev);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        {characters.map((personagem) => {
          return (
            <div className="personagem" key={personagem.id}>
              <img src={personagem.image} alt={personagem.name} />
              <div className="personagem-info">
                <h3>{personagem.name}</h3>
                <p>Status: {personagem.status}</p>
                <p>Espécie: {personagem.species}</p>
                <span>Origem: {personagem.origin.name}</span>
              </div>
            </div>
          );
        })}
      </Container>

      <Botoes>
        {prevPage ? (
          <button onClick={() => handlePrevPage(prevPage)}>Anterior</button>
        ) : (
          <button disabled>Anterior</button>
        )}
        {nextPage ? (
          <button onClick={() => handleNextPage(nextPage)}>Próximo</button>
        ) : (
          <button disabled>Próximo</button>
        )}
      </Botoes>
    </>
  );
};

export default Corpo;
