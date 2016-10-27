import React, { Component } from 'react';
import { List, ListItem, Spinner, Button } from 'react-mdl';

const RoomsList = (props) => {
    const { navCallback, rooms, loading } = props;

    if(loading){
        return (
            <Spinner/>
        );
    }
    return(
        <List>
            {
                rooms.map((room) => {
                    let roomId = room._id;
                    return (
                        <ListItem key={room._id}>
                            {room.name}
                            <Button onClick={navCallback.bind(null,room._id)}>
                                Enter
                            </Button>
                        </ListItem>
                    );
                })
            }
        </List>
    );
};
export default RoomsList;