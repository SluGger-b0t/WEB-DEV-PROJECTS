import {createStore,combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { tabReducer } from './reducers/Tabreducer';
import thunk from 'redux-thunk'
import todoReducer from './reducers/Todoreducers';
const reducer =combineReducers({
    todos:todoReducer,
    currentTab:tabReducer
})
const middleware=[thunk]
const store=createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))
)
export default store