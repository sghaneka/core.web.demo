"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ForumActions = require('../actions/ForumActions');
var ForumAnswer = require('./ForumAnswer.react');

var ForumAnswers = React.createClass({
    
    _onMarkCorrect: function(id) {
        ForumActions.markAnswerCorrect(id);
    },

    render: function() {

        var allAnswers = this.props.allAnswers;
        var answers = [];

        for (var key in allAnswers) {
            answers.push(<ForumAnswer key={key} id={key} 
                         answer={allAnswers[key]}
                         onMarkCorrect={ this._onMarkCorrect } />)
        }

        return (
            <div>
                { answers }
            </div>
        )
    }

});

module.exports = ForumAnswers;