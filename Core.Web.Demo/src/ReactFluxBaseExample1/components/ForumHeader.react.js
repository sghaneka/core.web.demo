"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var ForumHeader = React.createClass({
   
    render: function() {
        
        /* Automatic semi colon insertion avoidance */
        return (
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#">
                        React Forum
                      </a>
                    </div>
                  </div>
                </nav>
            );
    }
});

module.exports = ForumHeader;