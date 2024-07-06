import React from "react";
import { AboutContainer } from "./StyledAbout";
import aboutImage from "../../assets/images/about-covid.png";

function AboutCovid() {
  return (
    <AboutContainer>
      <div className="about_content">
        <img src={aboutImage} alt="About COVID-19" className="about_image" />
        <div className="about_text">
          <h2>About COVID-19</h2>
          <p>
            COVID-19 adalah penyakit pernapasan yang sangat menular yang
            disebabkan oleh virus corona jenis baru. Pertama kali diidentifikasi
            di Wuhan, Cina, pada akhir 2019, penyakit ini dengan cepat menyebar
            ke seluruh dunia, menyebabkan pandemi global. Virus ini terutama
            menyebar melalui kontak dekat dengan individu yang terinfeksi, dan
            gejala umum yang muncul termasuk demam, batuk, sesak napas,
            kelelahan, serta hilangnya rasa atau penciuman.
          </p>

          <p className="text_bottom">
            Dalam beberapa kasus, COVID-19 dapat menyebabkan komplikasi serius
            seperti pneumonia dan sindrom gangguan pernapasan akut (ARDS).
            Penyakit ini telah menimbulkan tantangan besar bagi sistem kesehatan
            di berbagai negara dan telah mempengaruhi kehidupan jutaan orang.
            Upaya pencegahan, seperti menjaga jarak fisik, mengenakan masker,
            dan vaksinasi massal, sangat penting untuk mengendalikan
            penyebarannya.
          </p>
          <button className="learn_more_button">
            <a
              href="https://kwikkiangie.ac.id/home/2021/10/01/artikel-apa-itu-coronavirus-atau-covid19/"
              target="_blank">
              Baca Selengkapnya...
            </a>
          </button>
        </div>
      </div>
    </AboutContainer>
  );
}

export default AboutCovid;
