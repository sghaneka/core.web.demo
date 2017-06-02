"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({

    render: function () {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };

        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
});

var CounterParent = React.createClass({

    getInitialState: function () {
        return {
            count: 0
        };
    },

    increase: function (e) {

        var currentCount = this.state.count;

        if (e.shiftKey) {
            currentCount += 10;
        } else {
            currentCount += 1;
        }

        this.setState({
            count: currentCount   // This forces a re-render!
        });
    },

    render: function () {
        var backgroundStyle = {
            padding: 15,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 200,
            borderRadius: 10,
            textAlign: "center"
        };

        var buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };

        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count} />
                <button onClick={this.increase} style={buttonStyle}>+</button>
            </div>
        );
    }
});

module.exports = CounterParent;