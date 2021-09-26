import { CarInterface } from '../../../App';
import { GET_CAR_BY_ID } from './queries';
import { useQuery } from '@apollo/react-hooks'
 
interface UseCarViewData {
  getCarById: CarInterface;
}

interface UseCarViewDataVars {
    id: string;
}

function useCarViewData(carId: string): CarInterface| undefined {
    const { data } =  useQuery< UseCarViewData, UseCarViewDataVars >(GET_CAR_BY_ID, 
      { variables: { id: carId },
      fetchPolicy: 'no-cache'
    });
    return data?.getCarById;
}

export default useCarViewData; 