import React from "react"
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'


const App = () => {

    return (
      <div>
        <AnecdoteList/><p></p>
        <AnecdoteForm/>
      </div>
    )
}

export default App; 