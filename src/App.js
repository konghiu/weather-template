import SearchLocation from "./container/searchLocation/SearchLocation";
import Weather from "./container/weather/Weather";
import "./App.css";

function App() {
     return (
          <div className="App">
               <h1>- Weather App Template -</h1>
               <div className="App__content">
                    <SearchLocation />
                    <Weather />
               </div>
          </div>
     );
}

export default App;
