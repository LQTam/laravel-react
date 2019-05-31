import {combineReducers} from 'redux';
import products from './products'
import editProduct from './editProduct'
const reducer = combineReducers({
    products,
    editProduct
})

export default reducer;