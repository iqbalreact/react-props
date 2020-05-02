import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends React.Component {
  state = {
    persons: [
      { name: 'Felix', age: 24 },
      { name: 'Ikhwan', age: 26 },
      { name: 'Iqbal', age: 23 }
    ],
    otherState: 'some other value'
  }


  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS : this.state.persons[0].name = 'Muhammad Iqbal';
    this.setState(
      {
        persons: [
          { name: 'Ayu', age: 24 },
          { name: 'Ikhwan', age: 26 },
          { name: 'Iqbal', age: 28 }
        ]
    
      }
    )
  }

  render () {
    return (
      <div className ="App">
        <h1>Hi, This My React App</h1>
        <p>Really Good !</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
}


export default App;
