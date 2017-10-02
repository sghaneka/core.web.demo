import React, { PropTypes } from 'react';

import NavBarComponent from '../components/nav/navBarComponent';


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBarComponent></NavBarComponent>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;