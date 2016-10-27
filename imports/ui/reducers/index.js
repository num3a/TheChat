import { combineReducers } from 'redux';
import usernameReducer from './username';


const TheChatReducers = combineReducers({
    usernameReducer,
});

export default TheChatReducers;