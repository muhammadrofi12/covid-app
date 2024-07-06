import React, { useContext } from "react";
import { GlobalsContext } from "../../Context/GlobalContext";
import { StyledGlobal, Title, BoxList, BoxItem } from "./StyledGlobal";

function Global() {
  const { globalData } = useContext(GlobalsContext);

  const formatNumber = (number) => {
    return number.toLocaleString("id-ID");
  };

  return (
    <StyledGlobal>
      <Title>
        <h1>Global</h1>
        <p>Data Covid Berdasarkan Global</p>
      </Title>

      <BoxList>
        {globalData.map((item, index) => (
          <BoxItem key={index} className={item.status.toLowerCase()}>
            <h2>
              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </h2>
            <p>{formatNumber(item.total)}</p>
          </BoxItem>
        ))}
      </BoxList>
    </StyledGlobal>
  );
}

export default Global;
