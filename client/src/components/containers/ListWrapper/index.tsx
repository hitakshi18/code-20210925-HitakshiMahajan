import React , { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { GET_CARS_LIST } from './queries'
import { CarListItem } from '../../presentational/CarListItem'
import { CarInterface } from '../../../App'

interface ListWrapperProps {
    sendCarIdToParent: (id: string) => void;
    // setParentCarViewBoxData: ( car: CarInterface )=> void;
    
    highlightedCar: string | undefined;
}

export const ListWrapper = ( { highlightedCar, sendCarIdToParent }:ListWrapperProps ) => {
    const [ carsList, setCarsList ] = useState<CarInterface[]>([]); 
    const [ apiError, setApiError ] = useState<string>('');
    
    useQuery(GET_CARS_LIST, {
        onCompleted: ({ carsList }) => {
            if( carsList.length>0 ){
                setCarsList(carsList);
                sendCarIdToParent(carsList[0]?.carId)
            }
        },
        onError: (err) => {
          setApiError(err.message);
        },
        fetchPolicy: 'no-cache'
    });

    return (
        <div>
            { carsList.length > 0 &&
                carsList.map( (carData : CarInterface) => (
                    <CarListItem carListItemData={carData} highlightedCar={highlightedCar} sendCarIdToParent={sendCarIdToParent}/>
                ) )
            }
            { apiError && <div>{apiError}</div> }
        </div>
       
    )  

}