﻿"use strict";

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import EventsListComponent from '../ReactTechEvents/components/events/eventsListComponent'
import EventDetailsComponent from '../ReactTechEvents/components/events/eventDetailsComponent'
import AboutPage from './components/about/AboutPage'
import App from './components/app';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={EventsListComponent} />
        <Route path="about" component={AboutPage} />
        <Route path="events/:id" component={EventDetailsComponent} />
    </Route>
);

