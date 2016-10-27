import React, { Component } from 'react';
import UserName from './UserName';
import { usernameChanged } from '../../actions/username';
import { createContainer } from 'meteor/react-meteor-data';

import { connect } from 'react-redux';

class UserNameContainer extends Component {
    _usernameChanged(username){
        let { dispatch } = this.props;
        dispatch(usernameChanged(username));
    }

    render() {
        return(
            <div>
                <UserName
                    value={this.props.username}
                    userChanged={this._usernameChanged.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    };
};

export default connect(mapStateToProps)(UserNameContainer);