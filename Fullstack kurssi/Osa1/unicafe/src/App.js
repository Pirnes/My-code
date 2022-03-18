import { useState } from "react";

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Display = (props)=> <div>{props.text}{props.value}</div>

const Statistics = (props) => {
  if (props.value[3]==0) {
    return (
      <div>
        No feedback given yet...
      </div>
    )
  }
  return (
      <div>
      <StatisticsLine value={props.value}/>
      </div>
    )
}

const StatisticsLine = (props) => {
    return (
      <div>
        <StatisticsGood value={props.value}/>
        <StatisticsNeutral value={props.value}/>
        <StatisticsBad value={props.value}/>
        <p></p>
        <StatisticsAll value={props.value}/>
        <StatisticsAverage value={props.value}/>
        <StatisticsPositive value={props.value}/>
      </div>
    )
}

const StatisticsGood = (props) => <div><Display value={props.value[0]} text='good: '/></div>

const StatisticsNeutral = (props) => <div><Display value ={props.value[1]} text='neutral: '/></div>

const StatisticsBad = (props) => <div><Display value ={props.value[2]} text='bad: '/></div>

const StatisticsAll = (props) => <div><Display value ={props.value[3]} text='all: '/></div>

const StatisticsAverage = (props) => <div><Display value ={props.value[4]} text='average: '/></div>

const StatisticsPositive = (props) => <div><Display value ={props.value[5]} text='positive: '/></div>


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