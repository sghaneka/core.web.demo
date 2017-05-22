"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function () {
    var letterStyle = {           
            padding: 10,                
            margin: 10,     
            backgroundColor: this.props.bgcolor, 
            /*backgroundColor: "#ffde00", */
            color: "#333",              
            display: "inline-block",    
            fontFamily: "monospace",    
            fontSize: 32,               
            textAlign: "center"         
          };  


        return (
            <div style={ letterStyle }>
                {this.props.children}
            </div>
        );
    }
});