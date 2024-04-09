import React from "react";
import "./App.css";
import RoutesFunction from "./Routes/routes";
import Header from './Header'



function App() {
  return (
    <div className="App">
       <Header />
       <RoutesFunction/>
    </div>
  );
}

export default App;
