import React from 'react'

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        let nameIsValid = this.validateName(props.name);
        this.state = {name: props.name, age: props.age, isValidName: nameIsValid};
        this.onNameChange = this.onNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onNameChange(e) {
        let newValue = e.target.value;
        let valid = this.validateName(newValue);
        this.setState({name: newValue, isValidName: valid});
    }
    onAgeChange = (e) => {
        let newValue = e.target.value;
        this.setState({age: newValue});
    }

    validateName(name) {
        return name.length > 4
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.isValidName) {
            alert(`Welcome ${this.state.name}, ${this.state.age} years old`);
        }
    }
    
    render() {
        let nameBorderColor = this.state.isValidName ? 'green' : 'red';
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text" onChange={this.onNameChange} value={this.state.name} style={{borderColor: nameBorderColor, outline: 'none'}} placeholder="Enter your name"></input>
                </label>
                <label>Age:
                    <input type="number" onChange={this.onAgeChange} value={this.state.age} placeholder="Enter your age"></input>
                </label>
                <input type="submit" value="Register"></input>
            </form>
        );
    }
}