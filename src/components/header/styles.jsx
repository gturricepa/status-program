import styled from "styled-components";
import theme from "../../styles/theme";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${theme.colors.red};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    background-color: transparent;
    color: ${theme.colors.white};
  }
`;

export const Links = styled.nav`
  display: flex;
  gap: 2rem;
  width: 80%;
  background-color: transparent;
  a {
    cursor: pointer;
    background-color: transparent;
    padding-left: 2rem;
    padding-right: 2rem;
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: 1.5rem;
    border-bottom: 1.5px solid white;
    transition: color 0.3s, background-color 0.3s, border-radius 0.3s;
    &:hover {
      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
      border-radius: 5px;
    }

    &:focus {
      outline: none;
    }
  }
`;
export const Welcome = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.white};
  background-color: ${theme.colors.red};

  p {
    margin-right: 1rem;
    font-size: 1.2rem;
    background-color: ${theme.colors.red};
  }

  svg {
    cursor: pointer;
    font-size: 2.5rem;
    background-color: ${theme.colors.red};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Holder = styled.div`
  width: 100%;
`;

export const HolderComponent = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding: 1rem;
  box-sizing: border-box;
`;
