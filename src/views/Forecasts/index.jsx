import React, { useState } from "react";
import styled from "styled-components";
import Forecasts from "../../components/Forecast";
import ForecastCard from "../../components/ForecastCard";
import FCData from "./list";

function ForecastsMain() {
  const [fcDetail, setFcDetail] = useState({
    title: "US GDP",
    content: "What will US GDP growth be in 2021?",
    dueDate: new Date().toLocaleDateString(),
  });
  const getItem = (item) => {
    setFcDetail(item);
  };
  //   console.log(fcDetail);
  return (
    <MainContainer>
      <ListSection>
        <Heading>Current Forecasts :</Heading>
        <ForecastsList>
          <Forecasts data={FCData} getItem={getItem} />
        </ForecastsList>
      </ListSection>
      <ListDetailSection>
        <Heading mapHead>Current Forecasts :</Heading>
        <ForecastsDetail>
          <ForecastCard data={fcDetail} />
        </ForecastsDetail>
      </ListDetailSection>
    </MainContainer>
  );
}

export default ForecastsMain;

// ----------------- Styles section ---------------------

const MainContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 15px;
  height: 82vh;
  display: flex;
`;

const ListSection = styled.div`
  width: 40%;
  height: 100%;
`;
const ListDetailSection = styled.div`
  width: 60%;
  height: 100%;
`;

const ForecastsList = styled.div`
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(216, 216, 216);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    /* background: linear-gradient(180.16deg, #2786c8 0%, #ab497c 99.74%); */
    background: #2786c8;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2786c8;
  }
`;
const ForecastsDetail = styled.div`
  height: 100%;
`;

const Heading = styled.h2`
  color: #5e5f5f;
  margin-left: ${(props) => (props.mapHead ? "35px" : "0px")};
`;
