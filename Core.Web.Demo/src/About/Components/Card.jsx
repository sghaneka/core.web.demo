"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Square = require('./Square.jsx');
var Label = require('./Label.jsx');

module.exports = React.createClass({
    render: function () {

        var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={ cardStyle }>
                <Square color={this.props.color}/>
                <Label color={this.props.color}/>
            </div>
        );
    }
});