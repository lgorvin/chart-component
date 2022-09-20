import React from "react";
import chartData from "../components/data.json";

const Bar = (props) => {
  function barVal() {
    for (let i = 0; i < chartData.length; i++) {
      if (chartData[i].day === props.day[i]) {
        return (
          <div
            style={{ height: chartData[i].amount * 3 }}
            className=" orangePink rounded-md w-[50px] h-[30px]"
          ></div>
        );
      }
    }
  }
  return <div>{barVal()}</div>;
};

export default Bar;
