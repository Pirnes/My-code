import { useState, useEffect } from 'react'
import Person from './components/Person'
import axios from 'axios'
import personService from './services/persons'
import React from 'react'
import ErrorMessage from './components/ErrorMessage'
import SuccessMessage from './components/SuccessMessage'


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
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  //removes selected person from phonebook
  const removePersonOf = (person) => {
    if (window.confirm('Do you really want to remove this person from phonebook?')) {
      personService
        .remove(person.id)
        .catch(e => {
          setErrorMessage(`${person.name} was already deleted from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        setSuccessMessage(
          `${person.name} has been removed from phonebook.`
        )
          setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      }
    else 
      return
  }

  //adds new person with name and number to phonebook
  const addPerson = (event) => {
    const isExists = persons.find(p => p.name.toLowerCase() === newPersonName.toLocaleLowerCase())

    event.preventDefault()
    const personObject = {
      name: newPersonName,
      number: newPersonNumber
    }

    //checkout is adding name already in phonebook and gives a change to replace it
    if (isExists) {
      if (window.confirm(`"${newPersonName}" is already added to phonebook, replace with new one??`)) {
        var i=0
        personService
        .update(isExists.id, personObject)
        .catch(e => {
          setErrorMessage(`${newPersonName} was already deleted from server`)
          
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
    
          setSuccessMessage(
            `${newPersonName} and old number is succesfully replaced!`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        
        })
      }
      else {
        return
      }

    }

    //Adds name and number to phonebook and set it up
    else {
    personService
    .create(personObject)
    .then(returnedPerson => {
    setPersons(persons.concat(returnedPerson))
    setNewPersonName('')
    setNewPersonNumber('')
    setSuccessMessage(
      `${newPersonName} and number ${newPersonNumber} is succesfully added to phonebook!`
    )
    setTimeout(() => {
      setSuccessMessage(null)
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
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessMessage message={successMessage}/>
      <ErrorMessage message={errorMessage}/>
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