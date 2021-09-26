import gql from 'graphql-tag';

export const GET_CARS_LIST = gql`
    query {
      carsList {
        carId
        carPrice
        carMake
        carModel
        carImageUrl
      }
    }`

    