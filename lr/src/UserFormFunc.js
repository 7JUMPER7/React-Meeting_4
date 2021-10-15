import { useState } from "react";

export default function UserFormFunc(props) {
    const validateName = (name) => {
        return name.length > 4
    }

    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    const [isNameValid, setNameValid] = useState(validateName(props.name));

    const onNameChange = (e) => {
        let newValue = e.target.value;
        let valid = validateName(newValue);
        setName(newValue);
        setNameValid(valid);
    }
    const onAgeChange = (e) => {
        let newValue = e.target.value;
        setAge(newValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isNameValid) {
            alert(`Welcome ${name}, ${age} years old`);
        }
    }

    let nameBorderColor = isNameValid ? 'green' : 'red';
    return(
        <form onSubmit={handleSubmit}>
        <label>Name:
            <input type="text" onChange={onNameChange} value={name} style={{borderColor: nameBorderColor, outline: 'none'}} placeholder="Enter your name"></input>
        </label>
        <label>Age:
            <input type="number" onChange={onAgeChange} value={age} placeholder="Enter your age"></input>
        </label>
        <input type="submit" value="Register"></input>
    </form>
    );
}