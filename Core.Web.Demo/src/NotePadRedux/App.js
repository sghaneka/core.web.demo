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

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDEVVqhVWVzXXugjJ0-1znoTPGS_mg7mFM",
            authDomain: "notepad-2a0dd.firebaseapp.com",
            databaseURL: "https://notepad-2a0dd.firebaseio.com",
            projectId: "notepad-2a0dd",
            storageBucket: "",
            messagingSenderId: "80985797530"
        });

        console.log('Firebase success...');

        firebase.database().ref('/notes')
            .on('value', snapshot => {
                const fbstore = snapshot.val();

                const store = _.map(fbstore, (value, id) => {
                    return {
                        id: id,
                        title: value.title,
                        details: value.details
                    };
                });

                this.setState({
                    notes: store
                });
                
            })
    }

    deleteNote(id) {
        firebase.database().ref(`/notes/${id}`).remove();
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
       // alert(`Your note ${this.state.currentTitle} has been added!!!`);
        event.preventDefault();
        const data = {
            title: this.state.currentTitle,
            details: this.state.currentDetails
        };

        firebase.database().ref('/notes').push(data, response =>
            response);

        this.setState({
            currentTitle: '',
            currentDetails: ''
        });
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
            <Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)}  />

      </div>
    );
  }
}

export default App;
