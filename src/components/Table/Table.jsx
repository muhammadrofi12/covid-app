import React, { useState } from "react";
import {
  StyledTable,
  Title,
  TableContainer,
  ProvinceTable,
  Pagination,
} from "./StyledTable";

function Table({ provinces }) {
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
    <StyledTable>
      <Title>
        <h1>Provinsi</h1>
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
              <tr key={province.kota}>
                <td>{startIndex + index + 1}</td>
                <td>{province.kota}</td>
                <td>{province.kasus}</td>
                <td>{province.sembuh}</td>
                <td>{province.dirawat}</td>
                <td>{province.meninggal}</td>
              </tr>
            ))}
          </tbody>
        </ProvinceTable>
      </TableContainer>

      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handleClick(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}>
            {i + 1}
          </button>
        ))}
      </Pagination>
    </StyledTable>
  );
}

export default Table;
