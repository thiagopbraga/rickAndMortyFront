import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  .personagem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 250px;
    height: 350px;
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
  }

  .personagem img {
    max-width: 170px;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .personagem:hover {
    transform: scale(1.05);
  }

  .personagem-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    width: 100%;

    h3 {
      font-size: 16px;
      color: #e89ac7;
      border-bottom: 1px solid #44281d;
    }

    p, span {
      font-size: 14px;
      color: #44281d;
      font-weight: bold;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  background: #d73035;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
`;

export const Botoes = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 20px;

    button {
        width: 100px;
        height: 50px;
        background: #e89ac7;
        border: none;
        border-radius: 8px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        transition: all 0.2s ease-in-out;
    }
`;
