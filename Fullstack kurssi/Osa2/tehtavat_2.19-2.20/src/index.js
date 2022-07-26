import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import react from 'react'
import './index.css'

axios
  .get('http://localhost:3001/persons')
  .then(response => {
    const persons = response.data
  })

ReactDOM.render(
    <App />,
    document.getElementById('root')
)