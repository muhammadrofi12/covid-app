import styled from "styled-components";
import theme from "../../utils/constants/theme";

export const StyledRegions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;

  h2 {
    text-align: center;
    color: ${theme.colors.primary};
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    text-align: center;
    color: ${theme.colors.secondary};
    font-size: 18px;
    margin-bottom: 24px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  .detail-regional {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 24px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: #ffffff;
  }

  .detail-regional h3 {
    font-size: 20px;
    color: ${theme.colors.black};
    margin-bottom: 16px;
    font-weight: 600;
  }

  .detail-regional:hover {
    background-color: rgb(229 231 235);
    cursor: pointer;
  }

  .stat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
  }

  .stat .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .stat .text p {
    margin: 0;
    font-size: 12px;
    font-weight: bold;
    color: ${theme.colors.gray};
  }

  .stat .text .number {
    font-size: 18px;
    font-weight: bold;
  }

  .stat .text .number.confirmed {
    color: ${theme.colors.primary};
  }

  .stat .text .number.recovered {
    color: ${theme.colors.secondary};
  }

  .stat .text .number.death {
    color: ${theme.colors.danger};
  }

  .icon {
    width: 28px;
    height: 28px;
  }

  /* Medium Screen */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .detail-regional {
      margin: 10px 0;
    }
  }

  /* Large Screen */
  @media (min-width: 768px) and (max-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
  }

  /* Extra Large Screen */
  @media (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
  }
`;
