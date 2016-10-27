import React, { Component } from 'react';
import { List, ListItem, Spinner, Button } from 'react-mdl';

const RoomsList = (props) => {
    const { navCallback, rooms, loading, isUserFilled } = props;

    if(loading){
        return (
            <Spinner/>
        );
    }
    return(
        <List style={{width: 300}}>
            {
                rooms.map((room) => {
                    let roomId = room._id;
                    return (
                        <ListItem key={room._id}>
                            {room.name}
                            <Button disabled={!isUserFilled} raised colored onClick={() => {
                                navCallback(room._id);
                            }}>
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