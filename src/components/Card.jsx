import React from "react";

import chartData from "../components/data.json";

const Card = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[350px] h-[110px] md:w-[500px] md:h-[110px] rounded-xl orangePink mt-36 md:mt-36 duration-300">
          <p className="mt-5 mb-1 ml-8 text-white">My balance</p>
          <h1 className="inline text-white text-3xl ml-8 pt-1 font-bold">
            $921.48
          </h1>
          <svg
            className="inline float-right mr-5 mt-[-15px]"
            width="72"
            height="48"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24" />
              <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
            </g>
          </svg>
          <div className="h-[480px] w-[350px] md:w-[500px] rounded-xl bg-white mt-[40px] duration-300">
            <h1 className="text-2xl pt-5 pl-6 font-bold">
              Spending - Last 7 days
            </h1>
            <ul className="flex justify-center mt-10 mr-6 md:mr-0 rotate-180 duration-300">
              <li className="inline group mr-[-5px] ml-3 md:mr-4 text-gray-400 text-center text-sm duration-300">
                <p className="rotate-180 mr-6 md:mr-0 duration-300">sun</p>
                <div
                  style={{ height: chartData[6].amount * 3 }}
                  id="sun"
                  className="orangePink hover:brightness-125 rounded-md w-[25px] md:w-[50px] duration-300"
                ></div>
                <div className="invisible group-hover:visible bg-black h-[25px] w-[25px] md:w-[50px] mt-2 rounded-md duration-300">
                  {" "}
                  <p className="rotate-180 text-white leading-relaxed">
                    ${chartData[6].amount}
                  </p>
                </div>{" "}
              </li>
              <li className="inline group mr-[-5px] md:mr-4 text-gray-400 text-center text-sm duration-300">
                <p className="rotate-180 mr-7 md:mr-0 duration-300">sat</p>
                <div
                  style={{ height: chartData[5].amount * 3 }}
                  id="sat"
                  className="orangePink hover:brightness-125 rounded-md w-[25px] md:w-[50px] duration-300"
                ></div>
                <div className="invisible group-hover:visible bg-black h-[25px] w-[25px] md:w-[50px] mt-2 rounded-md duration-300">
                  {" "}
                  <p className="rotate-180 text-white leading-relaxed">
                    ${chartData[5].amount}
                  </p>
                </div>
              </li>
              <li className="inline group mr-[-5px] md:mr-4 text-gray-400 text-center text-sm duration-300">
                <p className="rotate-180 mr-8 md:mr-0 duration-300">fri</p>
                <div
                  style={{ height: chartData[4].amount * 3 }}
                  id="fri"
                  className="orangePink hover:brightness-125 rounded-md w-[25px] md:w-[50px] duration-300"
                ></div>{" "}
                <div className="invisible group-hover:visible bg-black h-[25px] w-[25px] md:w-[50px] mt-2 rounded-md duration-300">
                  {" "}
                  <p className="rotate-180 text-white leading-relaxed">
                    ${chartData[4].amount}
                  </p>
                </div>
              </li>
              <li className="inline group mr-[-5px] md:mr-4 text-gray-400 text-center text-sm duration-300">
                <p className="rotate-180 mr-6 md:mr-0">thu</p>
                <div
                  style={{ height: chartData[3].amount * 3 }}
                  id="thu"
                  className="orangePink hover:brightness-125 rounded-md w-[25px] md:w-[50px] duration-300"
                ></div>
                <div className="invisible group-hover:visible bg-black h-[25px] w-[25px] md:w-[50px] mt-2 rounded-md duration-300">
                  {" "}
                  <p className="rotate-180 text-white leading-relaxed">
                    ${chartData[3].amount}
                  </p>
                </div>
              </li>
              <li className="inline group mr-[-5px] md:mr-4 text-gray-400 text-center text-sm duration-300">
                <p className="rotate-180 mr-5 md:mr-0">wed</p>
                <div
                  style={{ height: chartData[2].amount * 3 }}
                  id="wed"
                  className="cyanBg hover:brightness-110 rounded-md w-[25px] md:w-[50px] duration-300"
                ></div>{" "}
                <div className="bg-black invisible group-hover:visible h-[25px] w-[25px] md:w-[50px] mt-2 rounded-md duration-300">
                  {" "}
                  <p className="rotate-180 text-white leading-relaxed">
                    ${chartData[2].amount}
                  </p>
                </div>
              </li>
              <li className="inline group mr-[-5px] md:mr-4 text-gray-400 text-center text-sm duration-300">
                <p className="rotate-180 mr-6 md:mr-0 duration-300">tue</p>
                <div
                  style={{ height: chartData[1].amount * 3 }}
                  id="tue"
                  className="orangePink hover:brightness-125 rounded-md w-[25px] md:w-[50px] duration-300"
                ></div>{" "}
                <div className="invisible group-hover:visible bg-black h-[25px] w-[25px] md:w-[50px] mt-2 rounded-md duration-300">
                  {" "}
                  <p className="rotate-180 text-white leading-relaxed">
                    ${chartData[1].amount}
                  </p>
                </div>
              </li>
              <li className="inline group text-gray-400 text-center text-sm ">
                <p className="rotate-180 mr-7 md:mr-0 duration-300">mon</p>
                <div
                  style={{ height: chartData[0].amount * 3 }}
                  id="mon"
                  className="orangePink hover:brightness-125 rounded-md w-[25px] md:w-[50px] duration-300"
                ></div>{" "}
                <div className="invisible group-hover:visible bg-black h-[25px] w-[25px] md:w-[50px] mt-2 rounded-md duration-300">
                  {" "}
                  <p className="rotate-180 text-white leading-relaxed">
                    ${chartData[0].amount}
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex justify-center">
              <div className="bg-gray-200 mt-7 mx-7 w-[500px] h-[1px]"></div>
            </div>
            <div>
              <p className="ml-6 mt-6 mb-2 text-gray-400">Total this month</p>
              <h1 className="inline ml-6 mt-1 text-4xl md:text-5xl font-bold">
                $478.33
              </h1>
              <div className="inline">
                <p className="float-right font-bold mr-6">+2.4%</p>
                <p className="float-right text-gray-400 my-[-27px] mr-6">
                  from last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
