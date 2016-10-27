import React, { Component } from 'react';
import Room from './Room';
import { Messages } from '../../../api/messages/messages';

import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';

class RoomContainer extends Component {
    render() {
        return(
            <div>
                <Room
                    messages={{}}
                />
            </div>
        );
    }
}

const DataContainer = createContainer(({ params }) => {
    console.log('roomId:', params);

    const messageHandle = Meteor.subscribe('messages.byRoom', params.roomId);

    let messages = Messages.find({ roomId : params.roomId }).fetch();

    const loading = !messageHandle.ready();

    return {
        loading,
        messages,
    };
}, RoomContainer);

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(DataContainer);