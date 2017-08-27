"use strict";

import React from 'react';
import { EventData } from './eventData.js';
import EventThumbnailComponent from './eventThumbnailComponent.jsx';

let _dispatch = () => { console.log('lasers'); };

const myHandler = (e) => _dispatch();


//class EventsListComponent extends React.Component {
//    render() {
//        return (
            
//        )
//    }
//}
const EventsListComponent = props => {

    var thumbNails = [];

    var data = new EventData();

    for (var i = 0; i < data.getEvents().length; i++) {
        // thumbNails.push(<div className="col-md-5"> { data.getEvents()[i].name} </div>)
        thumbNails.push(<div className="col-md-5"> <EventThumbnailComponent eventDataThing={data.getEvents()[i]}  /> </div>)
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