﻿"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function () {
        return (
            <p>Hello, {this.props.greetTarget}  in component world!</p>
        );
    }
});
