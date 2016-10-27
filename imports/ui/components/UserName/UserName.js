import React, { Component } from 'react';
import { Textfield } from 'react-mdl';

class UserName extends Component {
    render(){
        const { userChanged,value } = this.props;

        return(
            <div>
                <Textfield
                    value={value}
                    label="Enter a username..."
                    onChange={(event) => {
                        userChanged(event.target.value);
                    }}
                />
            </div>
        );
    }
}

export default UserName;