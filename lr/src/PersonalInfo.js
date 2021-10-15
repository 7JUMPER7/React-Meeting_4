import Photo from "./Photo";
import './PersonalInfo.css'
import CustomInput from "./CustomInput";

export default function PersonalInfo(props) {
    const {name, phone, email, city, experience, skills, photos} = props.person;
    return(
        <>
        <CustomInput text={name}></CustomInput>
        <CustomInput label='Phone' text={phone}></CustomInput>
        <CustomInput label='Email' text={email}></CustomInput>
        <CustomInput label='City' text={city}></CustomInput>
        <CustomInput label='Experience' text={experience}></CustomInput>
        <ul><strong>Skills:</strong>
            {skills.map((item, index) => {
                return(
                    <li key={index}>{item} years</li>
                );
            })}
        </ul>
        <div className="photos">
            {photos.map((item, index) => {
                return(
                    <Photo key={index} path={item} alt={`${name} ${index}`}></Photo>
                )
            })}
        </div>
        </>
    );
}