import React, {useState} from 'react';
import { ListWrapper } from './components/containers/ListWrapper'
import Header from './components/presentational/Header';
import { CarViewBox } from './components/presentational/CarViewBox';
import useCarViewData from './components/customHooks/CarViewData/useCarViewData';
import './App.css';

export interface CarInterface {
  carId: string;
  carPrice?: number;
  carMake?: string;
  carModel?: string;
  carImageUrl?: string
  carDescription?: string;
}

function App() : JSX.Element {
  // state to save the id of the car visible on the right side of the screen
  const [ selectedCarId, setSelectedCarId] = useState<string>('');
  // custom hook to get data for a single car using carId from the server
  var carViewBoxData: CarInterface | undefined = useCarViewData(selectedCarId) 

  return (
    <div className="App">
        <Header headerString= "CARS CATALOG"/>
          <div className="bodyContainer">
            <div className="leftContainer">
              <ListWrapper highlightedCar={selectedCarId} sendCarIdToParent={setSelectedCarId}/>
            </div> 
            { carViewBoxData &&
              <div className="rightContainer" >
                <CarViewBox carData={carViewBoxData}/>
              </div>
            }   
          </div>
     </div>
  );
}

export default App;
