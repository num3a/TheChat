import React, { Component } from 'react';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';
import { Layout, Header, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { getColorClass, getTextColorClass} from '../utils/palette';

class App extends Component {
    render() {
        return (
                <Layout fixedHeader className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>
                    <Header className={getColorClass('primary')} title="TheChat" >
                    </Header>
                    <Content >
                        {this.props.children}
                    </Content>
                    <Footer size="mini">
                            <FooterSection type="bottom" logo="More Information">
                                <FooterLinkList>
                                    <a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a>
                                    <a href="#">Help</a>
                                    <a href="#">Privacy & Terms</a>
                                </FooterLinkList>
                            </FooterSection>
                        </Footer>
                </Layout>
        );
    }
}

export default AppContainer = createContainer(() => {
   //  Meteor.subscribe('rooms.all');

    const roomsHandle = Meteor.subscribe('rooms.all');


    const loading = !roomsHandle.ready();
    //const rooms = Rooms.find({});
    return {
        currentUser: Meteor.user(),
        //rooms: Rooms.find({}).fetch(),
    };
}, App);