import React from 'react';
import './App.css';
import { Header } from './components/presentational/Header';

export interface CarInterface {
  carId: string;
  carPrice: number;
  carMake: string;
  carModel: string;
  carImageUrl: string
}

function App() {

  return (
    <div className="App">
        <Header headerString= "CARS CATALOG"/>
         <div className="bodyContainer">
              <div className="leftContainer">
              </div> 
          
              <div className="rightContainer" >
              </div>
            
        </div>
    </div>
  );
}

export default App;
