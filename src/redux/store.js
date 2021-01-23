import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import errorReducers from './reducers/errorReducers';
import movieReducers from './reducers/movieReducers';

const reducer = combineReducers({
  errors: errorReducers,
  movies: movieReducers,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
