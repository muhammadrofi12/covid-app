import React from "react";
import styles from "./Statistics.module.css";
import data from "../../utils/constants/indonesia";

function Statistics() {
  const { indonesia } = data;

  const formatNumber = (number) => {
    return number.toLocaleString("id-ID");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Indonesia</h1>
        <p>Data Covid Berdasarkan Indonesia</p>
      </div>

      <div className={styles.box_list}>
        {indonesia.map((item, index) => (
          <div key={index} className={styles.box_item}>
            <h2>{item.status}</h2>
            <p className={styles[item.status.toLowerCase()]}>
              {formatNumber(item.total)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
