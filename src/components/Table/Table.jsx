import React, { useState } from "react";
import styles from "./Table.module.css";

function Table({ provinces, updateProvinceData }) {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(provinces.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentProvinces = provinces.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Provinsi</h1>
        <p>Data Covid Berdasarkan Provinsi</p>
      </div>

      <div className={styles.table_container}>
        <table className={styles.province_table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Kota</th>
              <th>Kasus</th>
              <th>Sembuh</th>
              <th>Meninggal</th>
              <th>Dirawat</th>
            </tr>
          </thead>
          <tbody>
            {currentProvinces.map((province, index) => (
              <tr key={province.kota}>
                <td>{startIndex + index + 1}</td>
                <td>{province.kota}</td>
                <td>{province.kasus}</td>
                <td>{province.sembuh}</td>
                <td>{province.meninggal}</td>
                <td>{province.dirawat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handleClick(i + 1)}
            className={currentPage === i + 1 ? styles.active : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Table;
