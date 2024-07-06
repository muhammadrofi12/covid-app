import peopleCovid from "../../assets/images/people-covid.png";
import { StyledHeader } from "./StyledHeader";

function Header() {
  return (
    <StyledHeader>
      <div className="header">
        <div className="left_content">
          <h1 className="title">Covid ID</h1>
          <p className="sub_title">Monitoring Perkembangan Covid</p>
          <p className="text">
            Aplikasi kami menyediakan data yang relevan di Indonesia dengan
            informasi terkini dari WHO dan CDC. Kami bertujuan untuk membantu
            masyarakat mendapatkan informasi tentang Covid-19 di Indonesia dan
            tetap aman. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since.
          </p>
          <button className="vaccine_button">Vaccine</button>
        </div>

        <div className="right_content">
          <img src={peopleCovid} alt="People Covid" />
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
