import * as types from '../constances/ActionTypes'


var initState = [];

const findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    })
    return result;
}
const products = (state = initState, action) => {
    var index = -1;
    var {id,product}  = action;
    switch (action.type) {
        case types.GET_ALL_PRODUCT: {
            state = action.products;
            return [...state];
        }

        case types.ADD_PRODUCT: {
            state.push(product);
            return [...state];
        }
        
        case types.DELETE_PRODUCT: {
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        }
        case types.EDIT_PRODUCT: {
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        }

        default:
            return [...state];
    }
}
export default products;