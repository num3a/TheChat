import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import AppContainer from '../../ui/components/AppContainer';
import HomeContainer from '../../ui/components/Home';
import RoomContainer from '../../ui/components/Room';
/*
 import ListPageContainer from '../../ui/containers/ListPageContainer.js';
 import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.js';
 import AuthPageJoin from '../../ui/pages/AuthPageJoin.js';
 */
import NotFoundPage from '../../ui/pages/NotFoundPage.js';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomeContainer} />
            <Route path="rooms/:roomId" component={RoomContainer} />
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Router>
);