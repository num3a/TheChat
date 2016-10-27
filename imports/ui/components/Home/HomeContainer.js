import React, { Component } from 'react';
import RoomsListContainer from '../RoomsList/RoomListContainer';
import UserNameContainer from '../UserName/UserNameContainer';

class HomeContainer extends Component {
    render() {
        return(
            <div>
                <UserNameContainer/>
                <RoomsListContainer />
            </div>
        );
    }
}

export default HomeContainer;