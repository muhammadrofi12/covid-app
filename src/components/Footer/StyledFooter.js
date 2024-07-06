import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../utils/constants/theme";

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledFooter = styled.div`
  background-color: ${theme.colors.primary};
  padding: 1.5rem 0.5rem;
  color: #fff;

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer_left {
    margin-bottom: 1rem;
  }

  .footer_brand {
    font-size: 18px;
  }

  .footer_title {
    margin: 0;
  }

  .footer_title a {
    padding-left: 4px;
    font-size: 12px;
    color: white;
  }

  .footer_title a:hover {
    color: rgb(229, 231, 235);
  }

  .footer_right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer_list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer_item {
    opacity: 0.8;
    margin-right: 0.4rem;
    cursor: pointer;
    transition: opacity 0.3s;
    font-size: 14px;
  }

  .footer_item:hover {
    opacity: 1;
    color: rgb(229, 231, 235);
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;

    .footer {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    .footer_left {
      margin-bottom: 0;
    }

    .footer_brand {
      font-size: 24px;
    }

    .footer_title a {
      font-size: 14px;
    }

    .footer_list {
      justify-content: flex-end;
    }

    .footer_item {
      margin-right: 1rem;
      font-size: 16px;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    padding-left: 60px;
    padding-right: 60px;

    .footer {
      justify-content: space-between;
    }

    .footer_brand {
      font-size: 32px;
    }

    .footer_title a {
      font-size: 16px;
    }

    .footer_item {
      margin-right: 1.5rem;
      font-size: 18px;
    }
  }
`;
