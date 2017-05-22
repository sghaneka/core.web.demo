"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function () {

        var squareStyle = {
            height: 150,
            backgroundColor: this.props.color
        };

        return (
            <div style={squareStyle}>
            </div>
        );
    }
});