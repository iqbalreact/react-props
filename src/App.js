import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends React.Component {
  state = {
    persons: [
      {  id: '1', name: 'Felix', age: 24 },
      {  id: '2', name: 'Ikhwan', age: 26 },
      {  id: '3', name: 'Iqbal', age: 23 }
    ],
    otherState: 'some other value',
    showPersons : false
  }


  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS : this.state.persons[0].name = 'Muhammad Iqbal';
  //   this.setState(
  //     {
  //       persons: [  
  //         { name: newName, age: 24 },
  //         { name: 'Ikhwan', age: 26 },
  //         { name: 'Iqbal', age: 28 }
  //       ]
    
  //     }
  //   )
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.person[personIndex]);
    person.name =event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState(
      {
        persons: persons
    
      }
    )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons})
  }

  togglePersnonalHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render () {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );

    }

    return (
      <div className ="App">
        <h1>Hi, This My React App</h1>
        <p>Really Good !</p>
        <button 
        style={style}
        onClick={this.togglePersnonalHandler}>Toogle Persons</button>
        {persons}
      </div>
    );
  }
}


export default App;
