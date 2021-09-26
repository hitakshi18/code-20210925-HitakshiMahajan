import React from 'react';
import { CarListItem } from '../../presentational/CarListItem'
import { CarInterface } from '../../../App'
import './CarsList.css'

interface  CarListProps {
  carListData: CarInterface[];
  highlightedCar: string | undefined;
}
export const CarsList = ( { carListData, highlightedCar }: CarListProps ) : JSX.Element => (
  <div>
       { carListData.map( (carData : CarInterface) => (
            <CarListItem carListItemData={carData} highlightedCar={highlightedCar}/>
        )
       )}
  </div>

)
      
   
