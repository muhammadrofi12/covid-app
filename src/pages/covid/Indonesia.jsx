// pages/covid/Indonesia.jsx
import React from "react";
import Header from "../../components/Header/Header";
import Indonesian from "../../components/Indonesian/Indonesian";
import { IndonesiansProvider } from "../../Context/IndonesianContext";
import TableIndonesians from "../../components/TableIndo/TableIndonesians";

function Indonesia() {
  return (
    <div>
      <Header />
      <IndonesiansProvider>
        <Indonesian />
        <TableIndonesians />
      </IndonesiansProvider>
    </div>
  );
}

export default Indonesia;
