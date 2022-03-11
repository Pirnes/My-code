const Header = (props) => {
  return (
    <div>
      <p>Kurssin nimi on {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Kurssiin kuuluvat seuraavat osiot:</p>
      <p>{props.part1}, jossa Tehtäviä  on {props.exercises1} kpl.<br></br>
         {props.part2}, jossa Tehtäviä  on {props.exercises2} kpl.<br></br>
         {props.part3}, jossa Tehtäviä  on {props.exercises3} kpl.<br></br>
        </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>

      <p>Yhteensä tehtäviä on: {props.exercises1 + props.exercises2 + props.exercises3} kpl.</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
    </div>
  )
}

export default App;
