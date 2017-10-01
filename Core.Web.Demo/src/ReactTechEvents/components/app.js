"use strict";

import React, { PropTypes } from 'react';
// import NavBarComponent from '../components/nav/navBarComponent';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>testing 123.......</p>
                {this.props.children}
            </div>            
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;

// <NavBarComponent />


//import ReactDOM from 'react-dom';
//import EventComponent from './eventComponent.jsx';



//ReactDOM.render(
//    <EventComponent></EventComponent>,
//    document.getElementById('eventapp')
//);

//ReactDOM.render(
//    <Router>
//        <Route path="/" component={EventComponent} />
//    </Router>,
//    document.getElementById('eventapp')
//);


