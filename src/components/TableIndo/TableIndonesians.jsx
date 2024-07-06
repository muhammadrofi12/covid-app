import React, { useContext, useState } from "react";
import { IndonesiansContext } from "../../Context/IndonesianContext";
import {
  StyledTable,
  Title,
  TableContainer,
  ProvinceTable,
  Pagination,
} from "../Table/StyledTable";

function TableIndonesians() {
  const { provinces } = useContext(IndonesiansContext);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  if (!provinces) {
    return null;
  }

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  if (provinces.length === 0) {
    return <p>Tidak ada data provinsi yang tersedia.</p>;
  }

  const currentProvinces = provinces.slice(startIndex, endIndex);

  return (
    <StyledTable>
      <Title>
        <h1>Situation by Provinces</h1>
        <p>Data Covid Berdasarkan Provinsi</p>
      </Title>

      <TableContainer>
        <ProvinceTable>
          <thead>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {currentProvinces.map((province, index) => (
              <tr key={index}>
                <td>{startIndex + index + 1}</td>
                <td>{province.name}</td>
                <td>{province.numbers.confirmed}</td>
                <td>{province.numbers.recovered}</td>
                <td>{province.numbers.treatment}</td>
                <td>{province.numbers.death}</td>
              </tr>
            ))}
          </tbody>
        </ProvinceTable>
      </TableContainer>

      <Pagination>
        {Array.from(
          { length: Math.ceil(provinces.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => handleClick(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}>
              {i + 1}
            </button>
          )
        )}
      </Pagination>
    </StyledTable>
  );
}

export default TableIndonesians;
