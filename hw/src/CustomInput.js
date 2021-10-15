import { useRef, useState } from "react";

export default function CustomInput(props) {
    const [value, setValue] = useState(props.text);
    const [isValid, setIsValid] = useState(false);
    const textInput = useRef(null);

    const onValueChange = () => {
        setValue(textInput.current.value);
        setIsValid(props.validationFunc(textInput.current.value));
    }

    let borderColor = (isValid) ? 'green' : 'red';
    return(
        <div>
            <label><strong>{(props.label !== '') ? props.label + ': ' : ''}</strong>
                <input onChange={onValueChange} ref={textInput} value={value} style={{borderColor: borderColor, outline: 'none'}}></input>
            </label>
        </div>
    );
}


CustomInput.defaultProps = {
    label: '',
    text: '',
    validationFunc: () => {}
}