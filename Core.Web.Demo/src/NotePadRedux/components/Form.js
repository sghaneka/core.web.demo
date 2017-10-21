import React from 'react';


class Form extends React.Component {

    handleChange(event) {
        this.props.handleChange(event);
    }

    handleSubmit(event) {
        this.props.handleSubmit(event);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="col s12">
                <div className="row">
                    <div className="row">
                        <div className="input-field col s3">
                            <input
                                name="currentTitle"
                                type="text"
                                value={this.props.currentTitle}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                        <div className="input-field col s7">
                            <input
                                name="currentDetails"
                                type="text"
                                value={this.props.currentDetails}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                        <div className="input-field col s2">
                            <button className="btn-large waves-effect waves-light" type="submit" name="action">Add Note</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;