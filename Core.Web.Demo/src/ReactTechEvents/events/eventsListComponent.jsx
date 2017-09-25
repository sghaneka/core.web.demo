"use strict";

import React from 'react';
import { EventDataService } from '../data/eventDataService.js';
import { ToasterService } from '../common/toasterService.js';
import EventThumbnailComponent from './eventThumbnailComponent.jsx';

let _dispatch = () => { console.log('lasers'); };

const myHandler = (e) => _dispatch();


class EventsListComponent extends React.Component {

    constructor(props) {
        super(props);
        let eventDataService = new EventDataService();
        this.events = eventDataService.getEvents();
        this.toasterService = ToasterService();
    }

    componentDidMount() {
        console.log('Aw yeah, it\'s sandwich time, hombre!');
        this.toasterService.success('message', 'title');
    }

    render() {
        let thumbNails = [];

        for (var i = 0; i < this.events.length; i++) {
            thumbNails.push(<div className="col-md-5" key={i}> <EventThumbnailComponent eventDataThing={this.events[i]} /> </div>)
        }

        return (
            <div>
                <h1>Upcoming Angular 2 Events</h1>
                <hr />
                <div className="row">
                    {thumbNails}
                </div>
                <button className="btn btn-primary" onClick={myHandler}>Log me</button>
            </div>              
        )
    }
}



const EventsListComponentAsProp = props => {

    let thumbNails = [];

    let eventDataService = new EventDataService();

    for (var i = 0; i < eventDataService.getEvents().length; i++) {
        // thumbNails.push(<div className="col-md-5"> { data.getEvents()[i].name} </div>)
        thumbNails.push(<div className="col-md-5" key={i}> <EventThumbnailComponent eventDataThing={eventDataService.getEvents()[i]}  /> </div>)
    }



    return (
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr />
            <div className="row">
                {thumbNails}
            </div>
            <button className="btn btn-primary" onClick={myHandler}>Log me</button>
        </div>        
    )
};


export default EventsListComponent;