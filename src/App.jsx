import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import About from "./pages/covid/About";

// import Layout
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/covid/indonesia" element={<Indonesia />}></Route>
            <Route path="/covid/provinsi" element={<Provinsi />}></Route>
            <Route path="/covid/about" element={<About />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
