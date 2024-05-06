import React, { useState } from "react";
import styles from "./Form.module.css";
import formCovid from "../../assets/images/form-covid.png";

import data from "../../utils/constants/provinces";

function Form({ updateProvinceData }) {
  const [province, setProvince] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState(0);

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleJumlahChange = (event) => {
    setJumlah(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedProvinces = [...data.provinces];
    const existingProvince = updatedProvinces.find(
      (prov) => prov.kota === province
    );

    if (existingProvince) {
      existingProvince[status.toLowerCase()] += parseInt(jumlah);
    } else {
      updatedProvinces.push({
        kota: province,
        kasus: status.toLowerCase() === "kasus" ? parseInt(jumlah) : 0,
        sembuh: status.toLowerCase() === "sembuh" ? parseInt(jumlah) : 0,
        meninggal: status.toLowerCase() === "meninggal" ? parseInt(jumlah) : 0,
        dirawat: status.toLowerCase() === "dirawat" ? parseInt(jumlah) : 0,
      });
    }

    updateProvinceData(updatedProvinces);

    setProvince("");
    setStatus("");
    setJumlah(0);
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form_left}>
          <img className={styles.form_image} src={formCovid} alt="Form Covid" />
        </div>

        <div className={styles.form_right}>
          <form onSubmit={handleFormSubmit}>
            <h1 className={styles.form_title}>Form Covid</h1>
            <div>
              <label htmlFor="province">Provinsi</label>
              <select
                id="province"
                name="province"
                value={province}
                onChange={handleProvinceChange}
                style={{ backgroundColor: "white" }}
              >
                <option value="">Pilih Provinsi</option>
                {data.provinces.map((province, index) => (
                  <option key={index} value={province.kota}>
                    {province.kota}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={status}
                onChange={handleStatusChange}
                style={{ backgroundColor: "white" }}
              >
                <option value="">Pilih Status</option>
                <option value="Kasus">Kasus</option>
                <option value="Sembuh">Sembuh</option>
                <option value="Meninggal">Meninggal</option>
                <option value="Dirawat">Dirawat</option>
              </select>
            </div>
            <div>
              <label htmlFor="jumlah">Jumlah</label>
              <input
                type="number"
                id="jumlah"
                name="jumlah"
                value={jumlah}
                onChange={handleJumlahChange}
              />
            </div>
            <button className={styles.form_button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
