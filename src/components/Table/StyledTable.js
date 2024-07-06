import styled from "styled-components";

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 32px;

  @media (min-width: 768px) {
    padding: 26px 0 50px 0;
  }

  @media (min-width: 992px) {
    padding: 50px 0 50px 0;
  }
`;

export const Title = styled.div`
  h1 {
    color: #06d6a0;
    text-align: center;
    font-size: 3.05rem;

    @media (min-width: 768px) {
      font-size: 2.85rem;
    }

    @media (min-width: 992px) {
      font-size: 3.05rem;
    }
  }

  p {
    color: #118ab2;
    text-align: center;
    font-size: 1rem;
    margin: 10px 0 40px 0;

    @media (min-width: 768px) {
      font-size: 0.8rem;
      margin: 8px 0 30px 0;
    }

    @media (min-width: 992px) {
      font-size: 1rem;
      margin: 10px 0 40px 0;
    }
  }
`;

export const TableContainer = styled.div`
  overflow: hidden;
  margin-top: 20px;
`;

export const ProvinceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 20px;

  th,
  td {
    padding: 10px 16px;
    text-align: center;
  }

  th {
    background-color: #06d6a0;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #06d69e46;
  }

  tr:hover {
    background-color: #06d69e75;
  }
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  button {
    background-color: #06d6a0;
    color: white;
    border: none;
    padding: 8px 12px;
    margin-right: 5px;
    cursor: pointer;

    &:hover {
      background-color: #118ab2;
    }

    &.active {
      background-color: #118ab2;
    }
  }
`;
