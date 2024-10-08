import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../utils/constants/theme";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledNavbar = styled.div`
  background-color: ${theme.colors.primary};
  padding: 1rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;

  .navbar {
    width: 100%;
  }

  .navbar_left {
    display: flex;
    gap: 100px;
    align-items: center;
  }

  .navbar_brand {
    font-size: 32px;
    margin-right: auto;
  }

  .navbar_toggle {
    color: #fff;
    font-size: 32px;
    cursor: pointer;
  }

  .navbar_right {
    display: none;
  }

  .show {
    display: flex;
  }

  .navbar_list {
    margin-top: 10px;
  }

  .navbar_item {
    opacity: 0.8;
    color: #fff;
    margin-top: 20px;
    transition: all 0.3s ease-in-out;
  }

  .navbar_item.active {
    color: #fff;
    opacity: 1;
    font-weight: bold;
  }

  .navbar_item.active::after {
    content: "";
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
  }

  .navbar_item:hover {
    opacity: 1;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      background-color: ${theme.colors.primary};
      padding: 1rem;
      color: #fff;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar_left {
      flex-grow: 1;
    }

    .navbar_brand {
      font-size: 32px;
      padding-left: 20px;
    }

    .navbar_right {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 20px;
    }

    .navbar_list {
      display: flex;
      list-style: none;
      margin: -20px 0 0 0;
      padding: 0;
    }

    .navbar_item {
      opacity: 0.8;
      margin-right: 1.5rem;
      cursor: pointer;
      transition: opacity 0.3s;
    }

    .navbar_toggle {
      display: none;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      background-color: ${theme.colors.primary};
      color: #fff;
      padding: 1rem;
      margin: 0;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar_left {
      flex-grow: 1;
    }

    .navbar_brand {
      font-size: 32px;
      padding-left: 100px;
    }

    .navbar_right {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 100px;
    }

    .navbar_list {
      display: flex;
      list-style: none;
      margin: -20px 0 0 0;
      padding: 0;
    }

    .navbar_item {
      opacity: 0.8;
      margin-right: 1.5rem;
      cursor: pointer;
      transition: opacity 0.3s;
    }

    .navbar_toggle {
      display: none;
    }
  }
`;
