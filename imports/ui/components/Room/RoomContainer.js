import React, { Component } from 'react';
import Room from './Room';
import { Messages } from '../../../api/messages/messages';
import moment from 'moment';

import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { messageChanged } from '../../actions/messaging';

class RoomContainer extends Component {
    _onMessageChange(message){
        let { dispatch } = this.props;
        dispatch(messageChanged(message));
    }
    _onSubmit(event){
        event.preventDefault();
        const { message, user, roomId } = this.props;
        Messages.insert({
            text: message,
            user: user,
            roomId: roomId,
            date: new Date(),
        });
        this.props.dispatch(messageChanged(''));

    }
    render() {
        const { messages } = this.props;
        return(
            <div>
                <Room
                    messageValue={this.props.message}
                    onMessageChange={this._onMessageChange.bind(this)}
                    onSubmitForm={this._onSubmit.bind(this)}
                    messages={messages}
                />
            </div>
        );
    }
}

const DataContainer = createContainer(({ params }) => {
    console.log('roomId:', params);
    //TODO: fix order after update
    const messageHandle = Meteor.subscribe('messages.byRoom', params.roomId);

    let messages = Messages.find(
        { roomId : params.roomId },
        {
            sort: {date: -1 }
        }
    ).fetch();

    const loading = !messageHandle.ready();

    return {
        loading,
        messages,
    };
}, RoomContainer);

const mapStateToProps = (state) => {
    return {
        message: state.messaging.message,
        user: state.user.username,
        roomId: state.room.roomId,
    };
};

export default connect(mapStateToProps)(DataContainer);