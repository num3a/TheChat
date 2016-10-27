import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class MessagesCollection extends Mongo.Collection {
    insert(list, callback) {
        return super.insert(list, callback);
    }
    remove(selector, callback) {
        return super.remove(selector, callback);
    }
}

export const Messages = new MessagesCollection('Messages');

// Deny all client-side updates since we will be using methods to manage this collection
Messages.deny({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

Messages.schema = new SimpleSchema({
    _id: { type: String, regEx: SimpleSchema.RegEx.Id, optional: false },
    text: { type: String, optional: false },
    roomId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: false },
    user: { type: String, optional: false},
    date: { type: Date, optional: false}
});

Messages.attachSchema(Messages.schema);



Messages.helpers({

});