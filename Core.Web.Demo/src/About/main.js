"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('./Components/HelloWorld.jsx');
var Buttonify = require('./Components/Buttonify.jsx');


//ReactDOM.render(React.DOM.h1(null, "Hello World another way22!")
//    , document.getElementById("app"));

//ReactDOM.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('app')
//);


ReactDOM.render(
    <div>
        <HelloWorld greetTarget="BatMan" />
        <HelloWorld greetTarget="MegaMan" />
        <Buttonify behavior="Submit">SEND DATA</Buttonify> 
    </div>,
    document.getElementById('app')
);