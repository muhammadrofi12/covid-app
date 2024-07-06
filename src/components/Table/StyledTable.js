import styled from "styled-components";
import theme from "../../utils/constants/theme";

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;

  @media (min-width: 768px) {
    padding: 26px 20px 50px;
  }

  @media (min-width: 992px) {
    padding: 50px 50px 50px;
  }
`;

export const Title = styled.div`
  h1 {
    color: ${theme.colors.primary};
    text-align: center;
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media (min-width: 992px) {
      font-size: 3rem;
    }
  }

  p {
    color: ${theme.colors.secondary};
    text-align: center;
    font-size: ${theme.buttonSizes.sm.fontSize};
    margin: 10px 0 20px;

    @media (min-width: 768px) {
      font-size: ${theme.buttonSizes.md.fontSize};
      margin: 10px 0 30px;
    }

    @media (min-width: 992px) {
      font-size: ${theme.buttonSizes.lg.fontSize};
      margin: 10px 0 40px;
    }
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 10px;
  width: 100%;
`;

export const ProvinceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;

  th,
  td {
    padding: 8px 12px;
    text-align: center;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      padding: 12px 20px;
      font-size: 1rem;
    }

    @media (min-width: 992px) {
      padding: 14px 24px;
      font-size: 1.1rem;
    }
  }

  th {
    background-color: ${theme.colors.primary};
    color: white;
  }

  tr:nth-child(even) {
    background-color: #e0f7fa;
  }

  tr:hover {
    background-color: #b2ebf2;
  }
`;

export const Pagination = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;

  button {
    background-color: ${theme.colors.primary};
    color: white;
    border: none;
    padding: 6px 10px;
    margin: 0 3px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 0.8rem;

    &:hover {
      background-color: ${theme.colors.secondary};
    }

    &.active {
      background-color: ${theme.colors.secondary};
    }

    @media (min-width: 768px) {
      padding: 10px 14px;
      font-size: 1rem;
    }

    @media (min-width: 992px) {
      padding: 12px 16px;
      font-size: 1.1rem;
    }
  }
`;
