import React, { useContext } from "react";
import styled from "styled-components";
import { IndexContext } from "../../views/Forecasts";

function Index({ data }) {
  const indexContext = useContext(IndexContext);
  return (
    <>
      {data.map((item, index) => (
        <ForecastsWrapper
          key={index}
          onClick={() => {
            indexContext.Dispatch({ type: "common", payload: index });
          }}
        >
          <Title isSelected={indexContext.index === index && "true"}>
            {item.title}
          </Title>
          <Question>{item.content}</Question>
        </ForecastsWrapper>
      ))}
    </>
  );
}
export default React.memo(Index);

// ----------------- Styles section ---------------------

const Title = styled.div`
  width: 100%;
  height: 30px;
  background: #f2f7fc;
  color: #2586c8;
  text-align: center;
  line-height: 30px;
  margin-bottom: 2px;

  ${({ isSelected }) =>
    isSelected &&
    `
    background: #146596;
    color: #ffffff;
  `};
`;

const Question = styled.div`
  width: 100%;
  height: 70px;
  background: #ffffff;
  color: #929292;
  text-align: center;
  line-height: 60px;
`;

const ForecastsWrapper = styled.div`
  width: 500px;
  height: 100px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    ${Title} {
      background: #2786c8;
      color: white;
    }
    ${Question} {
      color: #2786c8;
    }
  }
`;
