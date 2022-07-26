import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import './index.css'

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
