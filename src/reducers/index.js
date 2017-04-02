import { combineReducers } from 'redux';
import beersReducer from './beers_reducer';


const rootReducer = combineReducers({
    beers: beersReducer,
    // other reducers
})

export default rootReducer
