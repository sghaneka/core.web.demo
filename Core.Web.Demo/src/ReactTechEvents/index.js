import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


import { useRouterHistory } from 'react-router'
import { createHistory, useBasename } from 'history'

const browserHistory1 = useRouterHistory(createHistory)({
    basename: '/Home/ReactTechEvents'
})

render(
    <Router history={browserHistory1} routes={routes} />,
    document.getElementById('eventapp')
)