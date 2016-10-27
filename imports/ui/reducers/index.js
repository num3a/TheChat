import { combineReducers } from 'redux';
import user from './user';


const TheChatReducers = combineReducers({
    user: user,
});

export default TheChatReducers;