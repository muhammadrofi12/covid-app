import styled from "styled-components";
import theme from "../../utils/constants/theme";

export const StyledHeader = styled.div`
  .header {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 50px;
  }

  .left_content {
    grid-row: 2;
    padding: 20px 36px 20px;
  }

  .right_content {
    grid-row: 1;
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }

  .right_content img {
    width: 320px;
  }

  .title {
    font-size: 38px;
    color: ${theme.colors.primary};
  }

  .sub_title {
    color: ${theme.colors.secondary};
    margin: 12px 0 28px 0;
    font-size: 16px;
  }

  .text {
    font-size: 1rem;
    font-family: sans-serif;
    text-align: justify;
  }

  .vaccine_button {
    margin-top: 28px;
    display: flex;
    align-items: center;
    padding: 10px 46px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .vaccine_button img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .vaccine_button:hover {
    background-color: ${theme.hover.primary};
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .header {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .left_content {
      grid-row: 2;
      padding: 20px 32px 20px;
    }

    .right_content {
      grid-row: 1;
      display: flex;
      justify-content: center;
      padding-top: 50px;
    }

    .right_content img {
      width: 380px;
    }

    .title {
      font-size: 42px;
      color: ${theme.colors.primary};
    }

    .sub_title {
      color: ${theme.colors.secondary};
      margin: 16px 0 36px 0;
    }

    .text {
      font-size: 1rem;
      font-family: sans-serif;
      text-align: justify;
    }

    .vaccine_button {
      margin-top: 40px;
      display: flex;
      align-items: center;
      padding: 10px 60px;
      font-size: 16px;
      font-weight: bold;
      background-color: ${theme.colors.primary};
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .vaccine_button img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    .vaccine_button:hover {
      background-color: ${theme.hover.primary};
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .left_content {
      padding-left: 120px;
    }

    .title {
      font-size: 58px;
      color: ${theme.colors.primary};
    }

    .sub_title {
      color: ${theme.colors.secondary};
      margin: 16px 0 50px 0;
    }

    .text {
      max-width: 34rem;
      font-size: 1rem;
      font-family: sans-serif;
      text-align: justify;
    }

    .vaccine_button {
      margin-top: 50px;
      display: flex;
      align-items: center;
      padding: 10px 50px;
      font-size: 16px;
      font-weight: bold;
      background-color: ${theme.colors.primary};
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .vaccine_button img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    .vaccine_button:hover {
      background-color: ${theme.hover.primary};
    }

    .right_content {
      display: flex;
      align-items: center;
      padding: 50px 120px 50px 0;
    }

    .right_content img {
      width: 550px;
    }
  }
`;
