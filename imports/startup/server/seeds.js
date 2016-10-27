import { Meteor } from 'meteor/meteor';
import { Rooms } from '../../api/rooms/rooms';

Meteor.startup(() =>{
    //Initialize rooms
    let roomsCount = Rooms.find({}).count();

    if(roomsCount === 0){
        Rooms.insert({
            name: 'Room 1',
            description: 'Avec l\'inconstance observée, il serait bon de favoriser les relations des options que nous connaissons, même si ce n\'est pas facile.'
        });

        Rooms.insert({
            name: 'Room 2',
            description: 'Eu égard à l\'ambiance conjoncturelle, il est nécessaire de gérer la plus grande partie des améliorations déclinables, si l\'on veut s\'en sortir un jour.'
        });

        Rooms.insert({
            name: 'Room 3',
            description: 'Où que nous mène l\'orientation conjoncturelle, il serait intéressant de remodeler la totalité des alternatives opportunes, même si nous devons en tirer des conséquences.'
        });

        Rooms.insert({
            name: 'Room 4',
            description: 'Du fait de la politique induite, je recommande de caractériser la plus grande partie des synergies évidentes, si l\'on veut s\'en sortir un jour.'
        });

        Rooms.insert({
            name: 'Room 5',
            description: 'Pour réagir face à la restriction contextuelle, je recommande de prendre en compte l\'ensemble des décisions optimales, depuis longtemps.'
        });
    }
});