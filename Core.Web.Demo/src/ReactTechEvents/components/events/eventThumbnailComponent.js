"use strict";

import React from 'react';

const EventThumbnailComponent = ({ eventDataThing, clickHandler }) => {


    var startTime;
    switch (eventDataThing.time) {
        case '8:00 am':
            startTime = <span>(Early Start)</span>
            break;
        case '10:00 am':
            startTime = <span>(Late Start)</span>
            break;
        default:
            startTime = <span>(Normal Start)</span>
            break;
    }
    var timeBlock;
    if (eventDataThing.time === '8:00 am') {
        timeBlock = <div className="green bold">
            Time: {eventDataThing.time}
            { startTime }
        </div>
    } else {
        timeBlock = <div>
            Time: {eventDataThing.time}
            {startTime}
        </div>
    }
    var location;
    var url;

    if (eventDataThing.location) {
        location = <div>
                        <span>Location: {eventDataThing.location.address}</span>
                        <span className="pad-left">{eventDataThing.location.city},{eventDataThing.location.country}</span>
                    </div>
    }

    if (eventDataThing.onlineUrl) {
        url = <div>
                Online URL: {eventDataThing.onlineUrl}
                </div>
    }
    

    return (
        <div className="event-thumbnail" onClick={function () { clickHandler(eventDataThing.name) }}  >
            <div className="well hoverwell thumbnail">
                <h2>{eventDataThing.name}</h2>
                <div>Date: {eventDataThing.date}</div>
                {timeBlock}
                <div>Price: {eventDataThing.price}</div>
                {location}
                {url}
            </div>
        </div>        
    )
};

EventThumbnailComponent.propTypes = {
    eventDataThing: React.PropTypes.object.isRequired
}

export default EventThumbnailComponent;