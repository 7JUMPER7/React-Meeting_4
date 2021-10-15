import './Photo.css';

export default function Photo(props) {
    return(
        <img src={props.path} alt={props.alt}></img>
    );
}