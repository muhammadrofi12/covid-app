import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

import data from "../../utils/constants/provinces";

function Provinsi() {
  const [provinces, setProvinces] = useState(data.provinces);
  const updateProvinceData = (updatedProvinces) => {
    setProvinces(updatedProvinces);
  };

  return (
    <div>
      <Header />
      <Table provinces={provinces} updateProvinceData={updateProvinceData} />
      <Form updateProvinceData={updateProvinceData} />{" "}
    </div>
  );
}

export default Provinsi;
