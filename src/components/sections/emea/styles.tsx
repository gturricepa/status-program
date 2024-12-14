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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: transparent;
  border-radius: 8px;

  th,
  td {
    padding: 1rem;
    border-radius: 5px;
    background-color: transparent;
    text-align: center;
  }

  th {
    font-weight: 400;
    color: #333;
    background-color: ${theme.colors.lightGray};
  }

  td {
    font-size: 1rem;
    color: #555;
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }

  tbody {
    width: 100%;
  }

  tr {
    display: table-row;
  }
`;

export const Filter = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  .ant-select-selection-wrap {
    width: 25rem;
    margin-right: 1rem;
  }

  h2 {
    margin: 0;
    padding: 0;
    margin-right: 1rem;
  }

  .ant-select-multiple.ant-select-outlined .ant-select-selection-item {
    background-color: white !important;
  }

  .ant-select-dropdown
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: rgba(0, 0, 0, 0.88) !important;
    font-weight: 600 !important;
    background-color: transparent !important;

    &:hover {
      background-color: white !important;
    }
  }

  .ant-select-item,
  .ant-select-item-option,
  .ant-select-item-option-active,
  .ant-select-item-option-selected {
    background-color: white !important;

    &:hover {
      background-color: white !important;
    }
  }
`;
