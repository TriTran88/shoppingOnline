import { combineReducers } from 'redux';
import products from './Products';
import Cart from './Cart';
import message from './message';

const myPreducers = combineReducers({
    products,
    Cart,
    message
})

export default myPreducers;