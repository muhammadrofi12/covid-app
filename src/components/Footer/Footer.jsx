import { StyledFooter } from "./StyledFooter";

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
            <li className="footer_item">Global</li>
            <li className="footer_item">Indonesia</li>
            <li className="footer_item">Provinsi</li>
            <li className="footer_item">About</li>
          </ul>
        </div>
      </nav>
    </StyledFooter>
  );
}

export default Footer;
