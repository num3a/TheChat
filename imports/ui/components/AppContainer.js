import React, { Component } from 'react';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';
import { Layout, Content, Navigation } from 'react-mdl';
import { getColorClass, getTextColorClass} from '../utils/palette';
import { createStore, applyMiddleware, compose } from 'redux';
import TheChatReducers from '../reducers';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist'
import TopHeader from './Header/TopHeader';

const logger = createLogger();
const middleWare = [logger];
let store = compose(applyMiddleware(...middleWare), autoRehydrate())(createStore)(TheChatReducers);

persistStore(store, {blacklist : ['messageReducer']});


class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <Layout fixedHeader className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>
                    <TopHeader/>
                    <Content >
                        {this.props.children}
                    </Content>
                </Layout>
            </Provider>

        );
    }
}

export default App = createContainer(() => {
return {

};
}, App);