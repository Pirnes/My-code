import React from "react"

const Person = ({ person, removePerson }) => {


      return (
        <li className="persons">
            {person.name} {person.number}
            <button className="deletebutton" onClick={()=>removePerson(person.id)}>Delete</button>
        </li>
      )
    }
    
    export default Person