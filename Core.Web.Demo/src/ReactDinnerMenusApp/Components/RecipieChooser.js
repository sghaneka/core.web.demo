import React from 'react';

class RecipieChooser extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: 'chicken_noodle_soup' };
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Select the Recipie:
                    <select value={this.state.value} onChange={this.handleChange}>
                    </select>
                </label>
            </form>
            );
    }
}

export default RecipieChooser;