import React, { useContext } from "react";
import { IndonesiansContext } from "../../Context/IndonesianContext";
import { StyledIndonesian, Title, BoxList, BoxItem } from "./StyledIndonesian";

function Indonesian() {
  const { indonesiansData } = useContext(IndonesiansContext);

  const formatNumber = (number) => {
    return number.toLocaleString("id-ID");
  };

  return (
    <StyledIndonesian>
      <Title>
        <h1>Indonesian Situation</h1>
        <p>Data Covid in Indonesian</p>
      </Title>

      <BoxList>
        {indonesiansData.map((item, index) => (
          <BoxItem key={index} className={item.status.toLowerCase()}>
            <h2>
              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </h2>
            <p>{formatNumber(item.total)}</p>
          </BoxItem>
        ))}
      </BoxList>
    </StyledIndonesian>
  );
}

export default Indonesian;
