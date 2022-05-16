import { useState, useEffect } from 'react'
import Person from './components/Person'
import axios from 'axios'
import personService from './services/persons'
import React from 'react'

//Shows founded filtered names and numbers
const ShowFiltered = (props) => <strong>{props.value.name} {props.value.number}</strong>

//Filtering names from phonebook array
const Filter = (props) => {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState('');
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = props.value.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } 
    
    else {
      setFoundUsers('');
    }
    
    setName(keyword);
  };

  return (
    <div>
      Filter shown with: <input
        type='search'
        value={name}
        onChange={filter}
      />
      <p></p>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <div key={user.name}>
            <ShowFiltered value={user}/>
            </div>
          ))
        ) : (
          <h4>Filtered results shows up here...</h4>
        )}    
    </div>
  );
}


const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newPersonName, setNewPersonName] = useState('')
  const [newPersonNumber, setNewPersonNumber] = useState ('')

  const removePersonOf = (person) => {
    if (window.confirm('Do you really want to remove this person from phonebook?')) {
      personService
      .remove(person.id)
    }
    else {
      return
    }
  }

  //This adds new person with name and number to phonebook
  const addPerson = (event) => {
    const isExists = persons.find(p => p.name.toLowerCase() === newPersonName.toLocaleLowerCase())

    event.preventDefault()
    const personObject = {
      name: newPersonName,
      number: newPersonNumber
    }

    //checkout is adding name already in phonebook
    if (isExists) {
      if (window.confirm(`@{newPersonName is already added to phonebook, replace with new one}`)) {
        personService
        .update(isExists.id, personObject)
      }
      
      else return
    }

    else {
    personService
    .create(personObject)
    .then(returnedPerson => {
    setPersons(persons.concat(returnedPerson))
    setNewPersonName('')
    setNewPersonNumber('')
    })}
  }

  const handlePersonNameChange = (event) => {
  setNewPersonName(event.target.value)
  }

  const handlePersonNumberChange = (event) => {
  setNewPersonNumber(event.target.value)
  }
  
  const hook = () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={persons}/><p></p>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newPersonName}
          onChange={handlePersonNameChange}/>
        </div>
        <div>
          number: <input
          value={newPersonNumber}
          onChange={handlePersonNumberChange}/>
        </div>
        <div>
          <button type="submit">add name and number to phonebook</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.id} person={person} removePerson={() => removePersonOf(person)}/>
        )}
    </div>
  )
}

export default App