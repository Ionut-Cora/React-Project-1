import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salary: '',
            image: ''
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    updateSalary(event) {
        this.setState({salary: event.target.value + '£'});
    }

    updateImage(event) {
        this.setState({image: event.target.value});
    }

    render() {
        const {name, email, isGoldClient, salary, image} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, salary, image)}
            >
                <h2>Add users:</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />

                <label htmlFor="salary">Salary:</label>
                <input 
                    type="text" 
                    name="salary"
                    onChange={(event) => this.updateSalary(event)}
                />

                <label htmlFor="is-gold-client">GOLD Client</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input id="submit-button" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default UserAddForm;