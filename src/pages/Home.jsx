import React, { useState } from "react";
import Header from "../components/Header/Header";
import Global from "../components/Globals/Global";
import Regions from "../components/Regions/Regions";

import { GlobalsProvider } from "../Context/GlobalContext";

function Home() {
  return (
    <div>
      <Header />
      <GlobalsProvider>
        <Global />
        <Regions />
      </GlobalsProvider>
    </div>
  );
}

export default Home;
