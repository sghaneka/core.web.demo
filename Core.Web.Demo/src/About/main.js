"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = require('./Components/HelloWorld.jsx');
var Buttonify = require('./Components/Buttonify.jsx');
//var Letter = require('./Components/Letter.jsx');
var Letter = require('./Components/LetterReactStyle.jsx');
var Card = require('./Components/Card.jsx');
var LightningCounterDisplay = require('./State/Lightning.jsx');


//ReactDOM.render(React.DOM.h1(null, "Hello World another way22!")
//    , document.getElementById("app"));

//ReactDOM.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('app')
//);


//ReactDOM.render(
//    <div>
//        <HelloWorld greetTarget="BatMan" />
//        <HelloWorld greetTarget="MegaMan" />
//        <Buttonify behavior="Submit">SEND DATA</Buttonify> 
//    </div>,
//    document.getElementById('app')
//);

var destination = document.querySelector("#app");

//ReactDOM.render(
//    <div>
//        <Letter bgcolor="#58B3FF">A</Letter>
//        <Letter bgcolor="#FF605F">E</Letter>
//        <Letter bgcolor="#FFD52E">I</Letter>
//        <Letter bgcolor="#49DD8E">O</Letter>
//        <Letter bgcolor="#AE99FF">U</Letter> 
//    </div>,
//    destination
//);

//ReactDOM.render(
//    <div>
//        <Card color="#FFA737"/>
//    </div>, destination
//);

ReactDOM.render(
    <div>
        <LightningCounterDisplay color="#FFA737"/>
    </div>, destination
);