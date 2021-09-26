import React , {}from 'react';
import { Card, Button } from 'react-bootstrap';
import { CarInterface } from '../../../App'
import './carViewBox.css'

interface  CarViewBoxProps {
    carData: CarInterface
}

export const CarViewBox = ( { carData }: CarViewBoxProps ) : JSX.Element => {
 
    return (
      <Card className="carViewBox">
            <Card.Img variant="top" src={carData.carImageUrl} className="carViewImage" />
            <Card.Body>
              <Card.Title className="carViewTitleText">{`${carData.carMake} - ${carData.carModel}`}</Card.Title>
              <Card.Text className="carViewText">
              {carData.carDescription}
              </Card.Text>
              <Card.Text>
              Price - {carData.carPrice}
              </Card.Text>
            </Card.Body>
      </Card>
    )
      
    
}
   
