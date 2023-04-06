import React from "react";
import Slider from "react-slick";
import weatherStatusIcon from "../../../assets/weatherStatus/weatherStatus";
import "./weatherOther.css";

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
                              <div key={i}>
                                   <p>TUE</p>
                                   {
                                        weatherStatusIcon[
                                             item.weather?.at(0)?.icon
                                        ]
                                   }
                                   <p>{(item.main.temp - 273).toFixed(0)}°</p>
                              </div>
                         ))}
                    </Slider>
               ) : null}
          </React.Fragment>
     );
};

export default WeatherOthers;
