import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Provider from "./common/provider/Provider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <Provider>
          <App />
     </Provider>
);

reportWebVitals();
