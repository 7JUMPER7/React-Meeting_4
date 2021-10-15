import './App.css';
import PersonalInfo from './PersonalInfo';
// import UserFormFunc from './UserFormFunc';
// import UserForm from './UserFrom';
import img1 from './Photos/1.jpeg';
import img2 from './Photos/2.jpeg';

function App() {
  const person = {
    name: 'Arsenii Semenov',
    phone: '+380633520643',
    email: '2014.semenow.senya@gmail.com',
    city: 'Kriviy Rih',
    experience: 2,
    skills: [
      'C++', 
      'C#', 
      'SQL', 
      'HTML', 
      'CSS', 
      'JS', 
      'Angular', 
      'React', 
      'Python'
    ],
    photos: [
      img1,
      img2,
    ]
  };

  return (
    <div className="App">
      {/* <UserForm name="Name" age={0}></UserForm> */}
      {/* <UserFormFunc name="Name" age={0}></UserFormFunc> */}
      <PersonalInfo person={person}></PersonalInfo>
    </div>
  );
}

export default App;
