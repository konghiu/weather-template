import React from "react";
import Slider from "react-slick";
import weatherStatusIcon from "../../../assets/weatherStatus/weatherStatus";
import "./weatherOther.css";
import { dayInWeek } from "../../../assets/date/dayInWeek";

export const settings = {
     dots: false,
     infinite: false,
     speed: 500,
     slidesToShow: 5,
     slidesToScroll: 4,
     arrows: true,
     responsive: [
          {
               breakpoint: 500,
               settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
               },
          },
     ],
};

const WeatherOthers = ({ otherDaysTemperature }) => {
     return (
          <React.Fragment>
               {Array.isArray(otherDaysTemperature) ? (
                    <Slider {...settings} className={`weather__others`}>
                         {otherDaysTemperature.map((item, i) => (
                              <div key={i} className="weather__others-item">
                                   <p className="weather__others-day">
                                        {dayInWeek[item.dayInWeek].slice(0, 3)}
                                   </p>
                                   <p className="weather__others-date">
                                        {item.DMY}
                                   </p>
                                   <p className="weather__others-time">
                                        {item.hours}h
                                   </p>
                                   {weatherStatusIcon[item.icon]}
                                   <p className="weather__others-temp">
                                        {item.temp}°
                                   </p>
                              </div>
                         ))}
                    </Slider>
               ) : null}
          </React.Fragment>
     );
};

export default WeatherOthers;
