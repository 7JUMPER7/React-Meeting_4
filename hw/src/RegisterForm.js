import { useState } from 'react'
import './CustomInput'
import CustomInput from './CustomInput';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [photo, setPhoto] = useState('');

    const usernameValidation = (value) => {
        setUsername(value);
        if(value.length > 4) {
            setIsUsernameValid(true);
            return true;
        }
        setIsUsernameValid(false);
        return false;
    }
    const passwordValidation = (value) => {
        setPassword(value);
        if(value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm)) {
            setIsPasswordValid(true);
            return true;
        }
        setIsPasswordValid(false);
        return false;
    }
    const emailValidation = (value) => {
        setEmail(value);
        if(value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setIsEmailValid(true);
            return true;
        }
        setIsEmailValid(false);
        return false;
    }

    const photoOnChange = (e) => {
        const [file] = e.target.files;
        setPhoto(URL.createObjectURL(file));
        console.log(URL.createObjectURL(file));
    }

    const isAllInputsValid = () => {
        if(isUsernameValid && isPasswordValid && isEmailValid) {
            return true;
        }
        return false;
    }
    
    const submit = (e) => {
        e.preventDefault();
        if(isAllInputsValid()) {
            alert(`Username: ${username}\n` + 
                `Password: ${password}\n` + 
                `Email: ${email}\n` + 
                `Photo: ${photo}`);
        } else {
            alert('Not all inputs is valid!');
        }
    }

    return(
        <form onSubmit={submit}>
            <CustomInput label="Username" validationFunc={usernameValidation}></CustomInput>
            <CustomInput label="Password" validationFunc={passwordValidation}></CustomInput>
            <CustomInput label="Email" validationFunc={emailValidation}></CustomInput>
            <div>
                <input accept="image/*" type="file" onChange={photoOnChange}/>
                <img src={photo} alt={photo} style={{width: '300px'}}/>
            </div>
            <input type="submit" value="Register"></input>
        </form>
    );
}