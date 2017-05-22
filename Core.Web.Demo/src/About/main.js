"use strict";

var React = require('react');
var ReactDOM = require('react-dom');



//ReactDOM.render(React.DOM.h1(null, "Hello World another way22!")
//    , document.getElementById("app"));

//ReactDOM.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('app')
//);

// Demonstration of props
var HelloWorld = React.createClass({
    render: function () {
        return (
            <p>Hello, {this.props.greetTarget} world!</p>
        );
    }
});

// Demonstration of children and props
var Buttonify = React.createClass({
    render: function () {
        return (
            <div>
                <button type={this.props.behavior}>{this.props.children}</button>
            </div>
        );
    }
});


ReactDOM.render(
    <div>
        <HelloWorld greetTarget="BatMan" />
        <HelloWorld greetTarget="MegaMan" />
        <Buttonify behavior="Submit">SEND DATA</Buttonify> 
    </div>,
    document.getElementById('app')
);