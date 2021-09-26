import React , { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { GET_CARS_LIST } from './queries'
import { CarsList } from '../CarsList';
import { CarInterface } from '../../../App'

interface ListWrapperProps {
    setParentCarViewBoxData: ( car: CarInterface )=> void;
    highlightedCar: string | undefined;
}

export const ListWrapper = ( { setParentCarViewBoxData, highlightedCar }:ListWrapperProps ) => {
    const [ carsList, setCarsList ] = useState<CarInterface[]>([]); 
    const [ apiError, setApiError ] = useState<string>('');
    
    useQuery(GET_CARS_LIST, {
        onCompleted: ({ carsList }) => {
            if( carsList.length>0 ){
                setCarsList(carsList);
                setParentCarViewBoxData(carsList[0])
            }
        },
        onError: (err) => {
          setApiError(err.message);
        },
        fetchPolicy: 'no-cache'
    });

    return (
        <div>
            { carsList.length > 0 ?
               <CarsList carListData={carsList} highlightedCar={highlightedCar}/> :
               <div>test</div>
            }
            {
                apiError && <div>{apiError}</div>
            }
        </div>
       
    )  

}