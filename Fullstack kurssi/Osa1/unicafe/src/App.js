import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
  )

const Display = (props)=> {
  return (
  <div>
    {props.text}{props.value}
    </div>
  )
}

const Statistics = (props) => {
  if (props.value[0]==0) {
    return (
      <div>
        No feedback given yet...
      </div>
    )
  }
  return (
      <div>
      <Display value={props.value[0]} text='good: '/>
      <Display value={props.value[1]} text='neutral: '/>
      <Display value={props.value[2]} text='bad: '/>
      <p></p>
      <Display value={props.value[3]} text='all: '/>
      <Display value={props.value[4]} text='average: '/>
      <Display value={props.value[5]} text='positive: '/>
      </div>
    )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = (good - bad)/all
  const positive = good/all*100+' %'
  const buttonvalues = [good, neutral, bad, all, average, positive]

  return (
    <div>
      <h2>give feedback:</h2>
      <p></p>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <p></p>
      <h2>statistics:</h2>
      <Statistics value={buttonvalues}/>
    </div>
  )
}

export default App;