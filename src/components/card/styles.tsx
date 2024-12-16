import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 20rem;
  border-radius: 15px;
  justify-content: space-around;
  box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  span {
    font-size: 1rem;
  }
  &:hover {
    transform: scale(1.015);
  }

  h3 {
    font-size: 1.7rem;
    font-weight: 100;
    border-bottom: 1px solid red;
  }
`;

export const Descripition = styled.div`
  display: flex;
  flex-direction: column;
`;
