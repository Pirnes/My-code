import { ALL } from "dns"

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
      <Part kurssi={props.parts[1]} tehtavat={props.parts[2]}/>
      <Part kurssi={props.parts[3]} tehtavat={props.parts[4]}/>
      <Part kurssi={props.parts[5]} tehtavat={props.parts[6]}/>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of component',
        exercises: 14
      }
    ]
}

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts[ALL]}/>
      <Total parts={course.parts[ALL]}/>
    </div>
  )
}

export default App;
