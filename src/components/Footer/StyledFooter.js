import styled from "styled-components";
import theme from "../../utils/constants/theme";

export const StyledFooter = styled.div`
  background-color: ${theme.colors.primary};
  padding: 1.5rem 0.5rem;
  color: #fff;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer_left {
    flex-grow: 1;
    padding-left: 8px;
    margin-right: 14px;
  }

  .footer_brand {
    font-size: 18px;
  }

  .footer_title a {
    padding-left: 4px;
    font-size: 12px;
    color: white;
  }

  .footer_title a:hover {
    color: rgb(229 231 235);
  }

  .footer_right {
    display: flex;
    align-items: center;
  }

  .footer_list {
    display: flex;
    list-style: none;
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
    color: rgb(229 231 235);
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer_left {
      flex-grow: 1;
      padding-left: 18px;
    }

    .footer_brand {
      font-size: 32px;
    }

    .footer_title a {
      padding-left: 4px;
      font-size: 20px;
      color: white;
    }

    .footer_right {
      display: flex;
      align-items: center;
      padding-right: 8px;
    }

    .footer_list {
      display: flex;
      list-style: none;
    }

    .footer_item {
      opacity: 0.8;
      margin-right: 2rem;
      cursor: pointer;
      transition: opacity 0.3s;
      font-size: 18px;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer_left {
      flex-grow: 1;
    }

    .footer_brand {
      font-size: 32px;
      padding-left: 100px;
    }

    .footer_title {
      padding: 10px 0 0 100px;
    }

    .footer_title a {
      padding-left: 4px;
      font-size: 20px;
      color: white;
    }

    .footer_right {
      display: flex;
      align-items: center;
      padding-right: 100px;
    }

    .footer_list {
      display: flex;
      list-style: none;
    }

    .footer_item {
      opacity: 0.8;
      margin-right: 1.5rem;
      cursor: pointer;
      transition: opacity 0.3s;
      font-size: 18px;
    }
  }
`;
