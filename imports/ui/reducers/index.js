import { combineReducers } from 'redux';
import user from './user';
import messaging from './messaging';
import room from './room';

const TheChatReducers = combineReducers({
    user: user,
    messaging: messaging,
    room: room,
});

export default TheChatReducers;