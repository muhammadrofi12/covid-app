import styled from "styled-components";
import theme from "../../utils/constants/theme";

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  .form {
    display: flex;
    flex-direction: column;
  }

  .form_left {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px 28px 0;
  }

  .form_image {
    max-width: 60%;
    border-radius: 25px;
  }

  .form_right {
    flex-basis: 50%;
    margin: 0 0 100px 0;
  }

  .form_title {
    color: ${theme.colors.primary};
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
  }

  form div {
    margin: 0 24px 10px;
  }

  label {
    font-size: 1.2rem;
    color: #64748b;
    margin-bottom: 0.5rem;
  }

  select,
  input[type="number"] {
    padding: 0.5rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .form_button {
    font-size: 16px;
    padding: 0.7rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: ${theme.colors.primary};
    color: #fff;
    cursor: pointer;
    margin: 0 24px;
  }

  .form_button:hover {
    background-color: #01ffbb;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form {
      display: flex;
      flex-direction: row;
    }

    .form_left {
      display: flex;
      align-items: center;
      padding: 50px 100px 50px 16px;
    }

    .form_image {
      max-width: 100%;
      border-radius: 25px;
    }

    .form_right {
      flex-basis: 50%;
      margin: 60px 16px 60px 0;
    }

    .form_title {
      color: ${theme.colors.primary};
      font-size: 46px;
      text-align: center;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    form div {
      margin-bottom: 1rem;
    }

    label {
      font-size: 1.2rem;
      color: #64748b;
      margin-bottom: 0.5rem;
    }

    select,
    input[type="number"] {
      padding: 0.5rem;
      border: 1px solid ${theme.colors.primary};
      border-radius: 5px;
      font-size: 1rem;
      width: 100%;
      box-sizing: border-box;
    }

    .form_button {
      font-size: 20px;
      padding: 0.7rem 0.5rem;
      border: none;
      border-radius: 10px;
      background-color: ${theme.colors.primary};
      color: #fff;
      cursor: pointer;
    }

    .form_button:hover {
      background-color: #01ffbb;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form {
      display: flex;
      flex-direction: row;
    }

    .form_left {
      display: flex;
      align-items: center;
      padding: 50px 120px 50px 0;
    }

    .form_image {
      max-width: 100%;
      border-radius: 25px;
    }

    .form_right {
      flex-basis: 50%;
      margin: 100px 0 100px 0;
    }

    .form_title {
      color: ${theme.colors.primary};
      font-size: 60px;
      text-align: center;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    form div {
      margin-bottom: 1rem;
    }

    label {
      font-size: 1.2rem;
      color: #64748b;
      margin-bottom: 1rem;
    }

    select,
    input[type="number"] {
      padding: 0.5rem;
      border: 1px solid ${theme.colors.primary};
      border-radius: 5px;
      font-size: 1rem;
      width: 100%;
      box-sizing: border-box;
    }

    .form_button {
      font-size: 24px;
      padding: ${theme.buttonSizes.xl.padding};
      border: none;
      border-radius: 10px;
      background-color: ${theme.colors.primary};
      color: #fff;
      cursor: pointer;
    }

    .form_button:hover {
      background-color: #01ffbb;
    }
  }
`;
