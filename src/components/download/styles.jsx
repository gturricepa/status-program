import styled from "styled-components";

export const Holder = styled.div`
  svg {
    font-size: 1.7rem;
    color: gray;
  }
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1rem;
  justify-self: flex-end;
  align-self: flex-end;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
