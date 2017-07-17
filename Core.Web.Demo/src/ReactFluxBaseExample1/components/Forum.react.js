"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var ForumStore = require('../stores/ForumStore');
var ForumHeader = require('./ForumHeader.react');
var ForumAnswers = require('./ForumAnswers.react');
var ForumQuestion = require('./ForumQuestion.react');
var ForumAddAnswerBox = require('./ForumAddAnswerBox.react');
var ForumActions = require('../actions/ForumActions');


var Forum = React.createClass({
    getInitialState: function() {
      
        return {
            allAnswers: ForumStore.getAnswers()
        }        
    },    
    componentDidMount: function(){
      ForumStore.addChangeListener(this._onChange);  
    },
    
    componentWillUnmount: function() {
        ForumStore.removeListener(this._onChange);
    },
    
    render: function() {
        
        return (
            <div>
                <ForumHeader />
            
                <div className="container">
                    <ForumQuestion />
                    <hr/>
                    <ForumAnswers allAnswers={ this.state.allAnswers } />
                    <hr/>
                    <h4>Add an answer</h4>
                    <ForumAddAnswerBox onAddAnswer = { this._onAddAnswer } />
                </div>
            
            </div>
        );
    },
    
    _onAddAnswer: function(answerText) {
        ForumActions.addNewAnswer(answerText);
    },
    
    /* Update it all! */
    _onChange: function() {
        this.setState({ allAnswers: ForumStore.getAnswers() });
    }
});

module.exports = Forum;