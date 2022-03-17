import { useState } from "react";

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  )

const Display = props => <div>{props.text}{props.value}</div>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2><br></br>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <br></br>
      <h2>statistics</h2>
      <Display value={good} text='good: '/>
      <Display value={neutral} text='neutral: '/>
      <Display value={bad} text='bad: '/>
    </div>
  )
}

export default App;