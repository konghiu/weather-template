import React, { useContext, useEffect } from "react";
import { IoWaterOutline } from "react-icons/io5";
import { BsCloudSun, BsFillSunFill } from "react-icons/bs";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import "./weather.css";
import context from "../../common/context/context";
import { dayInWeek } from "../../assets/date/dayInWeek";

const date = new Date();

const Weather = () => {
     const consumer = useContext(context);
     const currentTemperature = consumer[0].currentTemperature;

     const onNotCity = () => {
          const notCity =
               !currentTemperature || currentTemperature.cod === "404";

          return notCity ? "weather__notCity" : "";
     };

     return (
          <div id="weather">
               <div className={`weather__current ${onNotCity()}`}>
                    <div className="weather__current-city">
                         <h3>{currentTemperature?.name || "CITY NAME"}</h3>
                         <div>
                              <FaLongArrowAltDown />
                              <span>25°</span>
                              <FaLongArrowAltUp />
                              <span>30°</span>
                         </div>
                    </div>
                    <div className="weather__current-temperature">
                         <div>
                              <h2>{dayInWeek[date.getDay()]}</h2>
                              <h3>
                                   {date.getDate() < 10
                                        ? "0" + date.getDate()
                                        : date.getDate()}
                                   /
                                   {date.getMonth() < 10
                                        ? "0" + (date.getMonth() + 1)
                                        : date.getMonth() + 1}
                                   /{date.getFullYear()}
                              </h3>
                              <h4>
                                   Wind {currentTemperature?.wind?.speed}km/h
                              </h4>
                              <h3>
                                   <IoWaterOutline />
                                   {currentTemperature?.main?.humidity}%
                              </h3>
                         </div>
                         <div>
                              <BsCloudSun />
                              <h2 className="weather__current-status">
                                   {currentTemperature?.weather
                                        ?.at(0)
                                        ?.description?.toUpperCase()}
                              </h2>
                         </div>
                         <div>
                              <h1>
                                   {(
                                        currentTemperature?.main?.temp - 273
                                   ).toFixed(0)}
                                   °
                              </h1>
                         </div>
                    </div>
               </div>
               <div className={`weather__others ${onNotCity()}`}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                         <div key={i}>
                              <p>TUE</p>
                              <BsFillSunFill />
                              <p>30°</p>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Weather;
