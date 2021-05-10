import React from "react";
import styled from "styled-components";
import logo from "./assets/images/logo.svg";
import Forecasts from "./views/Forecasts";

function App() {
  return (
    <div className="App">
      <Header>
        <Logo src={logo} />
      </Header>
      <MainContent>
        <Forecasts />
      </MainContent>
    </div>
  );
}

export default App;

// ---------------- Style Section --------------------------

const Header = styled.header`
  padding: 15px;
`;

const Logo = styled.img`
  width: 200px;
`;

const MainContent = styled.main`
  height: calc(100vh - 70px);
  background: #eeeff2;
  overflow: hidden;
`;
