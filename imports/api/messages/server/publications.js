import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages.js';

Meteor.publish('messages.byRoom', (roomId) => {
    return Messages.find({
        roomId: roomId.toString()
    }, {
        limit: 10,
    });

    /*return Messages.find({ roomId: roomId},{
        limit: 10,
        sort: {date: -1 }
    });
    */
});