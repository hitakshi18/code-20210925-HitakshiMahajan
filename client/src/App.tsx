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
  const [ selectedCarId, setSelectedCarId] = useState<string>('');
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
