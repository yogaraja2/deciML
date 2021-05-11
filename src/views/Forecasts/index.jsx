import React, { useReducer } from "react";
import styled from "styled-components";
import Forecasts from "../../components/Forecast";
import ForecastCard from "../../components/ForecastCard";
import FCData from "./list";

// Creating context
export const IndexContext = React.createContext();

// Initialize default state and reducer function
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "prev":
      return state - 1;
    case "next":
      return state + 1;
    case "common":
      return (state = action.payload);
    default:
      return state;
  }
};

function ForecastsMain() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContainer>
      <IndexContext.Provider value={{ index: state, Dispatch: dispatch }}>
        <ListSection>
          <Heading>Current Forecasts :</Heading>
          <ForecastsList>
            <Forecasts data={FCData} />
          </ForecastsList>
        </ListSection>

        <ListDetailSection>
          <ForecastsDetail>
            <ForecastCard data={FCData} />
          </ForecastsDetail>
        </ListDetailSection>
      </IndexContext.Provider>
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
  margin-top: 55px;
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
`;
