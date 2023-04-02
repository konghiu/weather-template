export const initialValue = {
     currentTemperature: null,
     otherDaysTemperature: null,
};

const reducer = (state, action) => {
     const { type, payload } = action;
     switch (type) {
          case "CURRENT":
               return {
                    ...state,
                    currentTemperature: payload,
               };
          case "OTHERDAYS":
               const date = new Date();
               console.log(date.getUTCDate());
               console.log(payload.list.map((item) => item.dt_txt));
               return {
                    ...state,
                    otherDaysTemperature: payload,
               };

          default:
               break;
     }
};

export default reducer;
