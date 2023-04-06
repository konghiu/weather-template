import React, { useContext } from "react";
import { IoWaterOutline } from "react-icons/io5";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import context from "../../common/context/context";
import weatherStatusIcon from "../../assets/weatherStatus/weatherStatus";
import WeatherOthers from "./others/WeatherOthers";
import "./weather.css";
import NotLocation from "./others/NotLocation";

const Weather = () => {
     const consumer = useContext(context);
     const currentTemperature = consumer[0].currentTemperature;
     const otherDaysTemperature = consumer[0].otherDaysTemperature;

     return (
          <div id="weather">
               {currentTemperature && currentTemperature.cod !== "404" ? (
                    <div className={`weather__current`}>
                         <div className="weather__current-city">
                              <h3>
                                   {currentTemperature?.name || "CITY NAME"},
                                   {" " +
                                        (currentTemperature?.nation ||
                                             "NATION")}
                              </h3>
                              <div>
                                   <FaLongArrowAltDown />
                                   <span>{currentTemperature?.tempMin}°</span>
                                   <FaLongArrowAltUp />
                                   <span>{currentTemperature?.tempMax}°</span>
                              </div>
                         </div>
                         <div className="weather__current-temperature">
                              <div>
                                   <h2>{currentTemperature?.dayInWeek}</h2>
                                   <h3>{currentTemperature?.day}</h3>
                                   <h4>Wind {currentTemperature?.wind}km/h</h4>
                                   <h3>
                                        <IoWaterOutline />
                                        {currentTemperature?.humidity}%
                                   </h3>
                              </div>
                              <div>
                                   {
                                        weatherStatusIcon[
                                             currentTemperature?.weatherStatus
                                                  ?.icon
                                        ]
                                   }
                                   {/* <BsCloudSun /> */}
                                   <h2 className="weather__current-status">
                                        {
                                             currentTemperature?.weatherStatus
                                                  ?.status
                                        }
                                   </h2>
                              </div>
                              <div>
                                   <h1>{currentTemperature?.currentTemp}°</h1>
                              </div>
                         </div>
                    </div>
               ) : (
                    <NotLocation />
               )}
               <WeatherOthers otherDaysTemperature={otherDaysTemperature} />
          </div>
     );
};

export default Weather;
