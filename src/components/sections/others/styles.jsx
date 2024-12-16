import styled from "styled-components";
import theme from "../../../styles/theme";
export const Holder = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  h1 {
    font-size: 2rem;
    width: 100%;
    font-weight: 100;
    color: ${theme.colors.primary};
    border-bottom: 1px solid ${theme.colors.red};
    padding-bottom: 0.5rem;
  }

  h2 {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 100;
    margin-bottom: 1rem;
  }
`;

export const CardHolder = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
