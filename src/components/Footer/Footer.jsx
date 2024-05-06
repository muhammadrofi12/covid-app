import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div className={styles.footer_left}>
          <h2 className={styles.footer_brand}>Covid ID</h2>
          <p className={styles.footer_title}>Developed by 
            <a href="https://github.com/muhammadrofi12">muhammadrofi</a>
          </p>
        </div>

        <div className={styles.footer_right}>
          <ul className={styles.footer_list}>
            <li className={styles.footer_item}>Global</li>
            <li className={styles.footer_item}>Indonesia</li>
            <li className={styles.footer_item}>Provinsi</li>
            <li className={styles.footer_item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
