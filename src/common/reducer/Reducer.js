import { dayInWeek } from "../../assets/date/dayInWeek";

export const initialValue = {
     currentTemperature: null,
     otherDaysTemperature: null,
};

const reducer = (state, action) => {
     const { type, payload } = action;
     const date = new Date();
     switch (type) {
          case "CURRENT":
               if (!payload) return state;
               if (payload.cod === "404")
                    return {
                         currentTemperature: payload,
                         otherDaysTemperature: null,
                    };
               const day = `
               ${
                    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
               } / ${
                    date.getMonth() < 10
                         ? "0" + (date.getMonth() + 1)
                         : date.getMonth() + 1
               } / ${date.getFullYear()}
               `;

               const currentState = {
                    cod: payload.cod,
                    nation: payload.sys?.country,
                    name: payload.name,
                    day: day,
                    dayInWeek: dayInWeek[date.getDay()],
                    wind: payload.wind?.speed,
                    humidity: payload.main?.humidity,
                    currentTemp: (payload.main?.temp - 273).toFixed(0),
                    tempMax: (payload.main?.feels_like - 273).toFixed(0),
                    tempMin: (payload.main?.temp_min - 273).toFixed(0),
                    weatherStatus: {
                         status: payload.weather
                              ?.at(0)
                              ?.description.toUpperCase(),
                         icon: payload.weather?.at(0)?.icon,
                    },
               };
               return {
                    ...state,
                    currentTemperature: currentState,
               };
          case "OTHERDAYS":
               console.log(payload.list.map((item) => item));
               return {
                    ...state,
                    otherDaysTemperature: payload.list,
               };

          default:
               break;
     }
};

export default reducer;
