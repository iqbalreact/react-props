import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


const App = props => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Felix', age: 24 },
        { name: 'Ikhwan', age: 26 },
        { name: 'Iqbal', age: 23 }
      ],
      otherState: 'some other value'
  });

  const[otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);
  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS : this.state.persons[0].name = 'Muhammad Iqbal';
    setPersonsState(
      {
        persons: [
          { name: 'Ayu', age: 24 },
          { name: 'Ikhwan', age: 26 },
          { name: 'Iqbal', age: 28 }
        ]
    
      }
    )
  }
  
  return (
    <div className ="App">
      <h1>Hi, This My React App</h1>
      <p>Really Good !</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}


export default App;

