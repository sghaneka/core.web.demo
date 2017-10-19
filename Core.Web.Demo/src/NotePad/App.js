import React, { Component } from 'react';
import './App.css';
import Intro from './Intro';

class App extends Component {

    constructor(props) {

        super(props);
        this.state = {
            name: 'Manny'
        }
    }


    componentDidMount() {
        console.log('Component just loaded...');
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}, Welcome to React</h1>
        </header>
        <Intro name={this.state.name} />
      </div>
    );
  }
}

export default App;
