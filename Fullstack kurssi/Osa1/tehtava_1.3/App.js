const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>Kurssin nimi on {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>Kurssiin kuuluvat seuraavat osat:</p>
      <Part kurssi = {props.name} tehtavat = {props.exercises}/>
      <Part kurssi = {props.name2} tehtavat = {props.exercises2}/>
      <Part kurssi = {props.name3} tehtavat = {props.exercises3}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      {props.kurssi}, joka sisältää {props.tehtavat} tehtävää.
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Yhteensä tehtäviä on: {props.exercises + props.exercises2 + props.exercises3} kpl.</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content name = {part1.name} exercises = {part1.exercises} name2 = {part2.name} exercises2 = {part2.exercises} name3 = {part3.name} exercises3 = {part3.exercises}/>
      <Total exercises = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}/>
    </div>
  )
}

export default App;
