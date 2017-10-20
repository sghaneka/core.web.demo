import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

const styles = {
    textAlign: 'center',
    margin: 0,
    padding: 0
}

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            notes: [
                {
                    id: 1,
                    title: 'Add course notes',
                    details: 'Need to add more details.... to the course '
                },
                {
                    id: 2,
                    title: 'Grocery shopping',
                    details: 'shoprite '
                },
                {
                    id: 3,
                    title: 'gym',
                    details: 'need to go daily..! '
                }
            ],

            name: 'Manny',
            currentTitle: '',
            currentDetails: ''
        }
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert(`Your note ${this.state.currentTitle} has been added!!!`);
        event.preventDefault();
    }


  render() {
    return (
      <div className="App">
            <Header name={this.state.name} />            
            <Form
                currentTitle={this.state.currentTitle}
                currentDetails={this.state.currentDetails}
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
            />
            <Grid notes={this.state.notes} />

      </div>
    );
  }
}

export default App;
