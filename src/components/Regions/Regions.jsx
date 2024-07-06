import React, { useContext } from "react";
import { GlobalsContext } from "../../Context/GlobalContext";
import { StyledRegions } from "./RegionsStyled";
import confirmedIcon from "../../assets/images/confirmed.png";
import recoveredIcon from "../../assets/images/recovered.png";
import deathIcon from "../../assets/images/death.png";

const Regions = () => {
  const { regions } = useContext(GlobalsContext);

  const formatNumber = (number) => {
    return number.toLocaleString("id-ID");
  };

  const getShortRegionName = (name) => {
    const map = {
      "South-East Asia": "Asia",
      "Western Pacific": "Pacific",
      "Eastern Mediterranean": "Mediterranean",
    };
    return map[name] || name;
  };

  return (
    <StyledRegions>
      <h2>Situation by Regions</h2>
      <p>Bacaan Pilihan Covid</p>
      <div className="container">
        {regions.map((region, index) => (
          <div className="detail-regional" key={index}>
            <h2>{getShortRegionName(region.name)}</h2>
            <div className="stat">
              <div className="text">
                <p>Confirmed</p>
                <div className="number">
                  {formatNumber(region.numbers.confirmed)}
                </div>
              </div>
              <img src={confirmedIcon} alt="confirmed" className="icon" />
            </div>
            <div className="stat">
              <div className="text">
                <p>Recovered</p>
                <div className="number">
                  {formatNumber(region.numbers.recovered)}
                </div>
              </div>
              <img src={recoveredIcon} alt="recovered" className="icon" />
            </div>
            <div className="stat">
              <div className="text">
                <p>Death</p>
                <div className="number">
                  {formatNumber(region.numbers.death)}
                </div>
              </div>
              <img src={deathIcon} alt="death" className="icon" />
            </div>
          </div>
        ))}
      </div>
    </StyledRegions>
  );
};

export default Regions;
