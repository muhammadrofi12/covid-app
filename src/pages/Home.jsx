import React, { useState } from "react";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Statistics from "../components/Statistics/Statistics";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

import data from "../utils/constants/provinces";

function Home() {
  const [provinces, setProvinces] = useState(data.provinces);
  const updateProvinceData = (updatedProvinces) => {
    setProvinces(updatedProvinces);
  };

  return (
    <div>
      <Navbar />

      <main>
        <Header />
        <Statistics />
        <Table provinces={provinces} updateProvinceData={updateProvinceData} />
        <Form updateProvinceData={updateProvinceData} />{" "}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
