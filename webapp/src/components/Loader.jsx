import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import styled from "styled-components";

export const Loader = () => {
  return (
    <Load>
      <h1>Loading</h1>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Load>
  );
};
const Load = styled.div`
  display: grid;
  place-items: center;
`;
