import { combineReducers } from 'redux';
import beersReducer from './beers_reducer';
import selectBeerReducer from './selectBeer_reducer';

const rootReducer = combineReducers({
    beers: beersReducer,
    SelectBeer: selectBeerReducer
})

export default rootReducer
