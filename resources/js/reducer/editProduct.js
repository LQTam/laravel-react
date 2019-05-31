import {GET_PRODUCT_BY_ID} from '../constances/ActionTypes';

var initState = {};

const editProduct = (state = initState,action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:{
            return action.product;
        }
        default:
            return state;
    }
}

export default editProduct;