"use strict";
let React = require('react');
let ReactDOM = require('react-dom');
let Forum = require('./Components/Forum.react');


ReactDOM.render(
    React.createElement(Forum, null),
    document.getElementById('forum')
);

