import React, { useContext, useState } from "react";
import styled from "styled-components";
import leftArr from "../../assets/images/leftarr.svg";
import rightArr from "../../assets/images/rightarr.svg";
import { IndexContext } from "../../views/Forecasts";

function ForecastsCard({ data }) {
  const indexContext = useContext(IndexContext);
  const currentData = data.filter(
    (item, index) => index === indexContext.index
  )[0];
  return (
    <CardWrapper>
      <HeaderNav>
        <Arrow
          onClick={() =>
            indexContext.Dispatch({
              type: "prev",
            })
          }
        >
          <img src={leftArr} alt="" />
          &nbsp;
          <span>Prev</span>
        </Arrow>
        <Title>{currentData.title}</Title>
        <Arrow
          onClick={() =>
            indexContext.Dispatch({
              type: "next",
            })
          }
        >
          <span>Next</span>&nbsp;
          <img src={rightArr} alt="" />
        </Arrow>
      </HeaderNav>
      <Body>
        <QuestionWrap>
          <Question>{currentData.content}</Question>
          <DueDate>Due Date: {currentData.dueDate}</DueDate>
        </QuestionWrap>
        <MapWrap>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62195.74004077681!2d80.1540117!3d13.020781099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e1f5da86397%3A0x21092f216ee26e47!2sChennai%20International%20Airport!5e0!3m2!1sen!2sin!4v1620672995363!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></Map>
        </MapWrap>
        <ResultWrap>
          <Result>
            Number of forecasts made : <span>{currentData.forecastsMade}</span>
          </Result>
          <Result>
            Current forecast: <span>{currentData.probablity}</span>
          </Result>
        </ResultWrap>
      </Body>
    </CardWrapper>
  );
}

export default React.memo(ForecastsCard);

// ----------------- Styles section ---------------------

const CardWrapper = styled.div`
  width: 90%;
  height: 75vh;
  margin: 15px auto;
  background: #ffffff;
  border-radius: 5px;
`;

const HeaderNav = styled.div`
  height: 50px;
  background: #2586c8;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.2rem;
`;

const Arrow = styled.div`
  padding: 20px;
  display: flex;
  align-items: baseline;
  img {
    width: 12px;
    height: 12px;
  }
  span {
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Body = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const QuestionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
`;

const Question = styled.div`
  width: 60%;
  color: #146596;
`;
const DueDate = styled.div`
  width: 30%;
  color: #929292;
`;
const MapWrap = styled.div`
  height: 400px;
  margin: 15px auto;
`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`;

const Result = styled.div`
  color: #929292;
  span {
    color: #2586c8;
    font-weight: bold;
  }
`;
