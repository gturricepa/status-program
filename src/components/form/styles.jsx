import styled from "styled-components";
import theme from "../../styles/theme";

export const Form = styled.form`
  width: 25rem;
  height: 35rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    width: 10rem;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
  }

  h1 {
    color: ${theme.colors.red};
    font-weight: 100;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 100;
    margin-bottom: 0.2rem;
    color: ${theme.colors.black};
  }
`;

export const Input = styled.input`
  width: 90%;
  padding: 0.8rem;
  font-size: 0.7rem;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.colors.red};
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.pink}; /* Foco com cor pink */
  }
`;

export const Button = styled.button`
  padding: 0.8rem;
  width: 90%;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    font-size: 1.1rem; /* Aumenta o tamanho da fonte no hover */
  }

  &:focus {
    outline: none;
  }
`;

export const Detail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background-color: ${theme.colors.pink}; /* Cor pink no fundo */
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 50%; /* Tornar a div circular */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Sombrinha suave */
`;
