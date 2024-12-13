import styled from "styled-components";
import theme from "../../styles/theme";

export const Form = styled.form`
  width: 45rem;
  height: 100vh;
  /* box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  span {
    color: ${theme.colors.red};
    font-size: 0.7rem;
  }

  img {
    width: 10rem;
    margin: 0;
    padding: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    h1 {
      display: flex;
      color: ${theme.colors.red};
      font-weight: 100;
      font-size: 4rem;
      margin: 0;
      padding: 0;
    }
    margin-bottom: 3rem;
    h2 {
      margin: 0;
      padding: 0;

      font-size: 2rem;
      font-weight: 100;
      color: ${theme.colors.black};
    }
  }
`;

export const Input = styled.input`
  width: 90%;
  padding: 0.8rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.colors.red};
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
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
  margin-bottom: 1rem;

  &:focus {
    outline: none;
  }
`;
