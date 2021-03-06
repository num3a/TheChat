import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class RoomsCollection extends Mongo.Collection {
    insert(list, callback) {
        return super.insert(list, callback);
    }
    remove(selector, callback) {
        return super.remove(selector, callback);
    }
}

export const Rooms = new RoomsCollection('Rooms');

// Deny all client-side updates since we will be using methods to manage this collection
Rooms.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

Rooms.schema = new SimpleSchema({
    _id: { type: String, regEx: SimpleSchema.RegEx.Id, optional: false },
    name: { type: String, optional: false },
    description: { type: String, optional: true },
});

Rooms.attachSchema(Rooms.schema);

Rooms.helpers({
});