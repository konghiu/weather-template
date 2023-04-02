import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./searchLocation.css";
import context from "../../common/context/context";

const api = {
     key: "2c2b2ba0c17984e35d7ff941ea19bcea",
     base: "https://api.openweathermap.org/data/2.5/",
};

const SearchLocation = () => {
     const consumer = React.useContext(context);
     const dispatch = consumer[1];
     const currentTemperature = consumer[0].currentTemperature;
     const [searchText, setSearchText] = useState("");

     React.useEffect(() => {
          handleGetDataWeather({ key: "Enter" }, "Saigon");
     }, []);

     const handleGetDataWeather = (e, init) => {
          if (e.key === "Enter") {
               console.log(searchText);
               fetch(
                    `${api.base}weather?q=${init || searchText}&appid=${
                         api.key
                    }`
               )
                    .then((res) => res.json())
                    .then((res) => {
                         dispatch({
                              type: "CURRENT",
                              payload: res,
                         });
                         fetch(
                              `${api.base}forecast?lat=${res.coord.lat}&lon=${res.coord.lon}&appid=${api.key}`
                         )
                              .then((res) => res.json())
                              .then((res) => {
                                   dispatch({
                                        type: "OTHERDAYS",
                                        payload: res,
                                   });
                              });
                         //console.log(res.main.temp - 273.15);
                    });
          }
     };

     return (
          <div id="searchLocation">
               <div className="searchLocation__input">
                    <input
                         value={searchText}
                         placeholder="search location ..."
                         onChange={(e) => setSearchText(e.target.value)}
                         onKeyDown={(e) => handleGetDataWeather(e)}
                    />
                    <BsSearch
                         onClick={() => handleGetDataWeather({ key: "Enter" })}
                    />
               </div>
          </div>
     );
};

export default SearchLocation;
