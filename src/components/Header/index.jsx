import React from "react";

import { Container, Content } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Rick and Morty</h1>
          <h2>Veja os personagens do desenho</h2>
        </div>
      </Content>
    </Container>
  );
}

export default Header;
