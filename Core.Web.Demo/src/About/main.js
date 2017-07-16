"use strict";
let React = require('react');
let ReactDOM = require('react-dom');

let HelloWorld = require('./Components/HelloWorld.jsx');
let Buttonify = require('./Components/Buttonify.jsx');
//var Letter = require('./Components/Letter.jsx');
let Letter = require('./Components/LetterReactStyle.jsx');
let Card = require('./Components/Card.jsx');
let LightningCounterDisplay = require('./State/Lightning.jsx');
let Circle = require('./DataToUI/Circle.jsx');
let CounterParent = require('./Events/Counter.jsx');


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

let destination = document.querySelector("#app");


//ReactDOM.render(
//    <div>
//        <Card color="#FFA737"/>
//    </div>, destination
//);

//ReactDOM.render(
//    <div>
//        <LightningCounterDisplay color="#FFA737"/>
//    </div>, destination
//);


function showCircle() {
    let colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    let ran = Math.floor(Math.random() * colors.length);
    return <Circle bgColor={colors[ran]} />;
}

//ReactDOM.render(
//    <div>
//        {showCircle()}
//        {showCircle()}
//        {showCircle()}
//        {showCircle()}
//    </div>,
//    destination
//);

//var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
//    "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

//var renderData = [];

//for (var i = 0; i < colors.length; i++) {
//    renderData.push(<Circle key={i + colors[i]} bgColor={colors[i]} />);
//}

//ReactDOM.render(
//    <div>
//        {renderData}
//    </div>,
//    destination
//);

ReactDOM.render(
    <div>
        <CounterParent />
    </div>,
    destination
);