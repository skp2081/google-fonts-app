import {createStore,combineReducers} from 'redux';
import sizes from './Sizes';
import products from './Products';

const rootReducers = combineReducers({
  sizes,
  products
})
const store = createStore(rootReducers);

export default store;
