import React, {useContext} from 'react';
import {renderRoutes} from 'react-router-config';
import {withContextApp, SmartLinkRouteContext} from '@smart-link/context';
import config from '@smart-link/auto-config';

const App = () => {
    const {routes} = useContext(SmartLinkRouteContext);
    return renderRoutes(routes);
};

export default withContextApp(config)(App);
