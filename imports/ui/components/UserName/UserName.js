import React, { Component } from 'react';
import { Textfield } from 'react-mdl';

class UserName extends Component {
    render(){
        const { userChanged } = this.props;

        return(
            <div>
                <Textfield
                    label="username"
                    onChange={(event) => {
                        userChanged(event.target.value);
                    }}
                />
            </div>
        );
    }
}

export default UserName;