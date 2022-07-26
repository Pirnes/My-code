import { useState, useEffect } from 'react'
import Person from './components/Person'
import axios from 'axios'
import personService from './services/persons'
import React from 'react'
import './index.css'
import Notification from './components/Notification'

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
    <div className='filter'>
      Search person: <input
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
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

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
    })
    .catch(error => {
      const cleared = error.response.data.slice(0, error.response.data.indexOf('<br>'))
      const moreCleared = cleared.split('<pre>')
      moreCleared.shift()
      setErrorMessage(moreCleared)
      console.log(error)
      console.log(error.response.data)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
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
    .get('/api/persons')
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Filter value={persons}/><p></p>
      <form onSubmit={addPerson}>
        <div className='input'>
          name: <input 
          value={newPersonName}
          onChange={handlePersonNameChange}/>
        </div>
        <div className='input'>
          number: <input
          value={newPersonNumber}
          onChange={handlePersonNumberChange}/>
        </div>
        <div>
          <button className='button' type="submit">add name and number to phonebook</button>
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