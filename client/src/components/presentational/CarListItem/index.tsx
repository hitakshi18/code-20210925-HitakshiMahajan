import React , {}from 'react';
import { Card, Button } from 'react-bootstrap';
import { CarInterface } from '../../../App'
import './carListItem.css'

interface  CarListItemProps {
    carListItemData: CarInterface;
    highlightedCar: string | undefined
}

export const CarListItem = ( { carListItemData, highlightedCar }: CarListItemProps ) : JSX.Element => {
    let highlight =  highlightedCar === carListItemData.carId ? 'highlight' : null;
    
    return (
      <Card className={`carListItem ${highlight}`} onClick={()=>{}}>
        <Card.Img variant="top" src={carListItemData.carImageUrl} className="carImage" />
        <Card.Body>
            <Card.Title>{`${carListItemData.carMake} - ${carListItemData.carModel}`}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
        </Card.Body>
      </Card>
    )
      
    
}
   
