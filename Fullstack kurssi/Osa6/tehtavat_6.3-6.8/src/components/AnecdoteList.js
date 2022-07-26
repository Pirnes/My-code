import { useDispatch, useSelector } from "react-redux"
import { addVote } from  '../reducers/anecdoteReducer'

const VoteAnecdote = () => {
  const dispatch = useDispatch()
    const value = 1
    dispatch(addVote(value))
}
  

const Anecdotes = () => {

const anecdotes = useSelector(state => state)
const listOfAnecdotes = [...anecdotes]
const showOneAnecdote = [anecdotes[Math.floor((Math.random()*anecdotes.length))].value]

const showAnecdotes = anecdotes.map((dote) => 
  <div key={dote.id}>
    {dote.value} has {dote.votes} votes <button onClick={VoteAnecdote()}>vote</button>
  </div>)
    console.log(showAnecdotes)

  return (
    <div>
      {showAnecdotes}
    </div>
  )
}

export default Anecdotes