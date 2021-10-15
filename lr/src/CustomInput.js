import { useRef, useState } from "react";

export default function CustomInput(props) {
    const [value, setValue] = useState(props.text);
    const textInput = useRef(null);

    const onValueChange = () => {
        setValue(textInput.current.value);
    }

    return(
        <div>
            <label><strong>{(props.label !== '') ? props.label + ': ' : ''}</strong>
                <input onChange={onValueChange} ref={textInput} value={value}></input>
            </label>
        </div>
    );
}


CustomInput.defaultProps = {
    label: '',
    text: ''
}