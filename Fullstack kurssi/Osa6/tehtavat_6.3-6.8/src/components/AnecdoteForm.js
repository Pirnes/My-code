import { useDispatch  } from "react-redux";
import { createAnecdote } from  '../reducers/anecdoteReducer'
    
const NewAnecdote = () => {
const dispatch = useDispatch()

const addAnecdote = (e) => {
    e.preventDefault()
    const value = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(createAnecdote(value))
  }

    return (
        <form onSubmit={addAnecdote}>
            <input name='anecdote'/><br></br>
            <button type='submit'>Add your own anecdote</button>
        </form>
    )
}

export default NewAnecdote