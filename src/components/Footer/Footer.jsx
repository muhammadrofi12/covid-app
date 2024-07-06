import React from "react";
import { StyledFooter, FooterLink } from "./StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <nav className="footer">
        <div className="footer_left">
          <h2 className="footer_brand">Covid ID</h2>
          <p className="footer_title">
            Developed by
            <a href="https://github.com/muhammadrofi12">muhammadrofi</a>
          </p>
        </div>

        <div className="footer_right">
          <ul className="footer_list">
            <li className="footer_item">
              <FooterLink to="/">Global</FooterLink>
            </li>
            <li className="footer_item">
              <FooterLink to="/covid/indonesia">Indonesia</FooterLink>
            </li>
            <li className="footer_item">
              <FooterLink to="/covid/provinsi">Provinsi</FooterLink>
            </li>
            <li className="footer_item">
              <FooterLink to="/covid/about">About</FooterLink>
            </li>
          </ul>
        </div>
      </nav>
    </StyledFooter>
  );
}

export default Footer;
