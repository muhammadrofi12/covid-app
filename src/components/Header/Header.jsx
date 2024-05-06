import styles from "./Header.module.css";
import peopleCovid from "../../assets/images/people-covid.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left_content}>
        <h1 className={styles.title}>Covid ID</h1>
        <p className={styles.sub_title}>Monitoring Perkembangan Covid</p>
        <p className={styles.text}>
          Aplikasi kami menyediakan data yang relevan di Indonesia dengan
          informasi terkini dari WHO dan CDC. Kami bertujuan untuk membantu
          masyarakat mendapatkan informasi tentang Covid-19 di Indonesia dan
          tetap aman. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since.
        </p>
        <button className={styles.vaccine_button}>Vaccine</button>
      </div>

      <div className={styles.right_content}>
        <img src={peopleCovid} alt="People Covid" />
      </div>
    </header>
  );
}

export default Header;
