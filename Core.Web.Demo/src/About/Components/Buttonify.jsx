"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <button type={this.props.behavior}>{this.props.children}</button>
            </div>
        );
    }
});