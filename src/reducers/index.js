import { combineReducers } from 'redux';
import beersReducer from './beers_reducer';

const rootReducer = combineReducers({
    beers: beersReducer,
})

export default rootReducer
