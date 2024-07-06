import styled from "styled-components";
import theme from "../../utils/constants/theme";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.colors.background};
  padding: 8rem 1rem;
  box-sizing: border-box;

  .about_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: white;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
  }

  .about_image {
    width: 100%;
    max-width: 300px;
    margin-bottom: 1.5rem;
  }

  .about_text {
    color: ${theme.colors.text};
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  .about_text h2 {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  .text_bottom {
    margin: 20px 0;
  }

  .learn_more_button {
    background-color: ${theme.colors.primary};
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
  }

  .learn_more_button a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
  }

  .learn_more_button:hover {
    background-color: ${theme.hover.primary};
  }

  @media (min-width: 768px) {
    padding: 2rem;

    .about_content {
      flex-direction: row;
      align-items: center;
      text-align: left;
    }

    .about_image {
      margin-right: 2rem;
      margin-bottom: 0;
    }

    .about_text {
      flex: 1;
    }
  }

  @media (min-width: 992px) {
    padding: 2rem 6rem;
  }
`;
