import { legacy_createStore } from "redux";
import counterReducer from './reducers/counterReducer'
import ReactDOM from 'react-dom'
import React from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const store = legacy_createStore(counterReducer)
console.log(store.getState())

const StatsList = (props) => {
	const stats = props.value

  if (props.value[3].value==0) {
    return (
      <div>
        No feedback given yet...
      </div>
    )
  }

    return (
    	<div className="container">
        
        <table className="table table-bordered">
          <tbody>
          {stats.map((stat,index = 'id') => (
            <tr key={index}>
            <td>{stat.name}</td>
            <td>{stat.value}</td>
            </tr>
          ))}
          </tbody>
        </table>
      	</div>
    )
}


const App = () => {

  const votes = store.getState()
  const good = votes.good
  const neutral = votes.neutral
  const bad = votes.bad
  const all = good+neutral+bad
  const average = (good - bad)/all
  const positive = good/all*100
  const buttonvalues = [good, neutral, bad, all, average, positive]
  const stats = [{'id':1, 'name':'good: ', 'value':good},{'id':2, 'name':'neutral: ', 'value':neutral},{'id':3, 'name':'bad: ', 'value':bad},{'id':4, 'name':'all: ', 'value':all},{'id':5, 'name':'average: ', 'value':average.toFixed(1)},{'id':6, 'name':'positive: ', 'value':positive.toFixed(1) + ' %'},]

  return (
    <div>
      <h2>give feedback:</h2>
      <p></p>
      <Button handleClick={() => store.dispatch({type:'GOOD'})} text='good'/>
      <Button handleClick={() => store.dispatch({type:'NEUTRAL'})} text='neutral'/>
      <Button handleClick={() => store.dispatch({type:'BAD'})} text='bad'/>
      <p></p>
      <h2>statistics:</h2>
      <StatsList value={stats}/>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
)
}

renderApp()
store.subscribe(renderApp)
export default App;