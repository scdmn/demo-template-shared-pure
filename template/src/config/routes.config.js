import React from 'react';
import Welcome from '../modules/Welcome';

const {appNamespace} = process.env.appBuildConfig;
const routes = [
    {
        path: ['/', `/${appNamespace}`],
        exact: true,
        component: () => <Welcome />,
    },
    {
        component: () => <Welcome />,
    },
];

export default routes;
