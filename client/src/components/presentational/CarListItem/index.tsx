import React from 'react';
import { Card } from 'react-bootstrap';
import { CarInterface } from '../../../App';
import './carListItem.css'

interface  CarListItemProps {
    carListItemData: CarInterface;
    highlightedCar: string | undefined;
    sendCarIdToParent: (id: string) => void;
}

export const CarListItem = ( { carListItemData, highlightedCar, sendCarIdToParent }: CarListItemProps ) : JSX.Element => {
  // highlight class added to the currently selected car by comapring the carId of the item and the highlightedCar 
  let highlight =  highlightedCar === carListItemData.carId ? 'highlight' : null;
  // onClick send the item carId to the parent App.tsx  
    return (
      <Card className={`carListItem ${highlight}`} onClick={ ()=>{ sendCarIdToParent(carListItemData.carId) }}>
        <Card.Img variant="top" src={carListItemData.carImageUrl} className="carImage" />
        <Card.Body>
            <Card.Title className="carListTitleText">{`${carListItemData.carMake} - ${carListItemData.carModel}`}</Card.Title>
            <Card.Text >
                Price - Rs {carListItemData.carPrice}
            </Card.Text>
        </Card.Body>
      </Card>
    )
      
    
}
   
