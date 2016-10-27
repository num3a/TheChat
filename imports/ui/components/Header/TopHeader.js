import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Navigation} from 'react-mdl';
import { getColorClass} from '../../utils/palette';

class TopHeader extends Component {
    render() {
        return(
            <Header className={getColorClass('primary')} title="TheChat" >
                <Navigation>
                    <a href="#" >{this.props.user}</a>
                </Navigation>
            </Header>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.username,
    };
};

export default connect(mapStateToProps) (TopHeader);