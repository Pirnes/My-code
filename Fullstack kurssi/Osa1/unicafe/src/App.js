import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
  )

const Display = props => <div>{props.text}{props.value}</div>

const Statistics = props => (
    <div>
      <Display value={props.value} text={props.text}/>
    </div>
  )

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = (good - bad)/all
  const positive = good/all*100+' %'

  return (
    <div>
      <h2>give feedback:</h2>
      <p></p>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <p></p>
      <h2>statistics:</h2>
      <Statistics value={good} text='good: '/>
      <Statistics value={neutral} text='neutral: '/>
      <Statistics value={bad} text='bad: '/>
      <p></p>
      <Statistics value={all} text='all: '/>
      <Statistics value={average} text='average: '/>
      <Statistics value={positive} text='positive: '/>
    </div>
  )
}

export default App;