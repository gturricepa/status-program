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
  width: 50%;
  height: 100%;
  align-items: flex-end;
  img {
    width: 25rem;
    background-color: transparent;
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;
