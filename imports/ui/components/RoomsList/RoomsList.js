import React, { Component } from 'react';
import { List, ListItem, Spinner, Button } from 'react-mdl';

const RoomsList = (props) => {
    const { navCallback, rooms, loading, authenticated } = props;

    if(loading){
        return (
            <Spinner/>
        );
    }
    return(
        <List style={{width: 300, marginLeft: 300}}>
            {
                rooms.map((room) => {
                    let roomId = room._id;
                    return (
                        <ListItem key={room._id}>
                            {room.name}
                            <Button disabled={authenticated} raised colored onClick={navCallback.bind(null,room._id)}>
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