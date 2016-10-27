import React, { Component } from 'react';
import RoomsListContainer from '../RoomsList/RoomListContainer';

class HomeContainer extends Component {
    render() {
        return(
            <div>
                <RoomsListContainer />
            </div>
        );
    }
}

export default HomeContainer;