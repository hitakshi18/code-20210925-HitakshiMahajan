import gql from 'graphql-tag';

export const GET_CAR_BY_ID = gql`
    query getCarById($id : String!){
        getCarById(id:$id) {
        carId
        carPrice
        carMake
        carModel
        carImageUrl
        carDescription
      }
    }`

   
