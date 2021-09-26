import React , { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { GET_CARS_LIST } from './queries'
import { CarListItem }  from '../../presentational/CarListItem'
import { CarInterface } from '../../../App'

interface ListWrapperProps {
    sendCarIdToParent: (id: string) => void;
    highlightedCar: string | undefined;
}
interface GetCarsListData {
    carsList: CarInterface[]
}

export const ListWrapper = ( { highlightedCar, sendCarIdToParent }: ListWrapperProps ): JSX.Element => {
    const [ carsList, setCarsList ] = useState<CarInterface[]>([]); 
    const [ apiError, setApiError ] = useState<string>('');
    
    useQuery <GetCarsListData>(GET_CARS_LIST, {
        onCompleted: ({ carsList }) => {
            if( carsList.length>0 ){
                setCarsList(carsList);
                sendCarIdToParent(carsList[0]?.carId)
            }
        },
        onError: (err) => {
          setApiError("Error occured on the server side. Unable to fetch data");
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
            { apiError && <h4 className="text-center">{apiError}</h4> }
        </div>
    )  

}