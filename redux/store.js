import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import tictactoeReducer from './tictactoe-reducer';

let reducers = combineReducers({
  tictactoe: tictactoeReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;
