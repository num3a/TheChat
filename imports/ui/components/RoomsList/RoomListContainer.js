import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Rooms } from '../../../api/rooms/rooms';
import RoomsList from './RoomsList';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { usernameChanged } from '../../actions/username';
import { connect } from 'react-redux';


class RoomListContainer extends Component {
    _navigationCallback(roomId) {
        console.log(`navigate to route: /rooms/${roomId}`);
        browserHistory.push(`/rooms/${roomId}`);
    }

    render() {
        return(
            <div>
                <RoomsList
                    rooms={this.props.rooms}
                    loading={this.props.loading}
                    navCallback={this._navigationCallback.bind(this)}
                    isUserFilled={this.props.isUserFilled}
                />
            </div>
        );
    }
}

const  DataContainer = createContainer(() => {

    const roomsHandle = Meteor.subscribe('rooms.all');
    const rooms = Rooms.find({}).fetch();

    const loading = !roomsHandle.ready();

    return {
        loading,
        rooms,
    };
}, RoomListContainer);


const mapStateToProps = (state) => {
    return {
        isUserFilled: state.user.username !== '' && state.user.length !== 0,
    };
};

export default connect(mapStateToProps)(DataContainer);