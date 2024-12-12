import styled from "styled-components";
import theme from "../../styles/theme";
export const Holder = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.red};
  justify-content: center;
  width: 40%;
  height: 100%;
  align-items: end;
  img {
    width: 20rem;
    background-color: transparent;
    margin-right: 1.5rem;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  h1 {
    font-weight: 100;
  }
`;

export const Button = styled.button`
  padding: 0.8rem;
  width: 30%;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  margin-top: 1rem;

  &:focus {
    outline: none;
  }
`;
