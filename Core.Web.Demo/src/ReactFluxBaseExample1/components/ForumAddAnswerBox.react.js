"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var ENTER_KEY_CODE = 13;

var ForumAddAnswerBox = React.createClass({
    
    getInitialState: function() {
        return {
            value: ''
        };
    },
    
    _addAnswer: function() {
       this.props.onAddAnswer(this.state.value);  
    },
    
    render: function() {
        return (
            <div>
                <textarea id="addAnswer" onChange={ this._onChange } className="col-md-6 col-xs-8"></textarea>
                &nbsp;
                    <input type="button" className="btn btn-primary" 
                   onClick={ this._addAnswer } value="Add" />
            </div>
        )
    },
    
    _onChange: function(event) {
        this.setState({
           value: event.target.value 
        });
    }

});

module.exports = ForumAddAnswerBox;