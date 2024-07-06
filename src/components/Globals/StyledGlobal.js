import styled from "styled-components";
import theme from "../../utils/constants/theme";

export const StyledGlobal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 36px 0 42px 0;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  @media (min-width: 992px) {
    padding: 50px 0;
  }
`;

export const Title = styled.div`
  h1 {
    color: ${theme.colors.primary};
    text-align: center;
    font-size: 2.28rem;

    @media (min-width: 768px) {
      font-size: 2.58rem;
    }

    @media (min-width: 992px) {
      font-size: 3.05rem;
    }
  }

  p {
    color: ${theme.colors.secondary};
    text-align: center;
    font-size: ${theme.buttonSizes.md.fontSize};
    margin: 6px 0 34px 0;

    @media (min-width: 768px) {
      margin: 10px 0 36px 0;
    }

    @media (min-width: 992px) {
      margin: 10px 0 40px 0;
    }
  }
`;

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 48px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0 30px;
    justify-content: center;
  }

  @media (min-width: 992px) {
    margin: 0 300px;
  }
`;

export const BoxItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(229 231 235);
    cursor: pointer;
  }

  p {
    padding-top: 10px;
    font-size: 2rem;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 2.58rem;
    }

    @media (min-width: 992px) {
      font-size: 3.051rem;
    }
  }

  &.confirmed {
    color: ${theme.colors.primary};
  }

  &.recovered {
    color: ${theme.colors.secondary};
  }

  &.death {
    color: ${theme.colors.danger};
  }
`;
