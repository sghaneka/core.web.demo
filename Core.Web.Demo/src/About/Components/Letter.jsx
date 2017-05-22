"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="letter">
                {this.props.children}
            </div>
        );
    }
});