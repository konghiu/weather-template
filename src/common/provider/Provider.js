import React, { useReducer } from "react";
import context from "../context/context";
import reducer, { initialValue } from "../reducer/Reducer";

const Provider = ({ children }) => {
     const [value, dispatch] = useReducer(reducer, initialValue);

     return (
          <context.Provider value={[value, dispatch]}>
               {children}
          </context.Provider>
     );
};

export default Provider;
