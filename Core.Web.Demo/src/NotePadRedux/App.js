import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase';
import _ from 'lodash';


const styles = {
    textAlign: 'center',
    margin: 0,
    padding: 0
}

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            name: 'Manny',
            currentTitle: '',
            currentDetails: '',
            notes: []
        }
    }

  render() {
    return (
      <div className="App">
            <Header name={this.state.name} />            
            <Form />
            <Grid />
      </div>
    );
  }
}

export default App;
