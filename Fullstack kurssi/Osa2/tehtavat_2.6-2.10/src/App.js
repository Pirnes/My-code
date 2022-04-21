import { useState } from 'react'

const ShowPersons = (props) => <div>{props.person.name} {props.person.number}</div>
  
const ShowFiltered = (props) => <div>{props.value.name} {props.value.number}</div>
  
const Filter = (props) => {
  // Hakukentän arvo
  const [name, setName] = useState('');
  // Hakutulokset
  const [foundUsers, setFoundUsers] = useState('');
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = props.value.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Tehdään rajausehdosta case-insensitiivinen, eli löydetään haut riippumatta onko kirjoitettu isolla vai pienellä
      });
      setFoundUsers(results);
    } 
    
    else {
      setFoundUsers('');
      // Jos hakukenttä on tyhjä, ei näytetä mitään
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
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    
    if (persons.some(({name})=>name==newName))
    {
      return (
        window.alert(newName + ' is already added to phonebook')
      )
    }
    
    else
    {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={persons}/><p></p>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add name and number to phonebook</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <ShowPersons key={person.name} person = {person}/>
        )}
    </div>
  )
}

export default App