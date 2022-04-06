import { getValue } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'

const Button = (props) =>  <button onClick={props.handleClick}>{props.text}</button>

const Randomize = (props) => {
  const [points, setPoints] = useState(new Array(7).fill(0))

  const UpdatePoints = (selected) => {
    let copy = [...points]
    copy[selected]++
    setPoints(copy)
  }
  const [selected, setSelected] = useState(0)
  var randomi

  const max = Math.max(...points)
  const indexandmax = points.indexOf(max)

  return (
    <div>
      {props.value[randomi = Math.floor((Math.random()*props.value.length)+1) -1]}<p></p>
      has {points[randomi]} votes<p></p>
      <Button handleClick={() => setSelected(selected +1)} text='Get random anecdote'/>
      <Button handleClick={() => UpdatePoints(randomi)}text='Vote this anecdote'/><p></p>
      <h4>Anecdote with most votes: </h4><p></p>
      {props.value[indexandmax]}<h4> has {max} votes. </h4>
    </div>
  )
}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

    return (
      <Randomize value={anecdotes}/>
    )
}

export default App; 