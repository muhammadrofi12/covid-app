import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.container}`}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_left}>
          <h2 className={styles.navbar_brand}>Covid ID</h2>
          <div className={styles.navbar_toggle} onClick={toggleMenu}>
            {isOpen ? <FaTimes style={{ color: "#EF476F" }} /> : <FaBars />}
          </div>
        </div>

        <div className={`${styles.navbar_right} ${isOpen ? styles.show : ""}`}>
          <ul className={styles.navbar_list}>
            <li className={styles.navbar_item}>Global</li>
            <li className={styles.navbar_item}>Indonesia</li>
            <li className={styles.navbar_item}>Provinsi</li>
            <li className={styles.navbar_item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
