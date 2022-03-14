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
      <Part kurssi={props.parts[0].name} tehtavat={props.parts[0].exercises}/>
      <Part kurssi={props.parts[1].name} tehtavat={props.parts[1].exercises}/>
      <Part kurssi={props.parts[2].name} tehtavat={props.parts[2].exercises}/>
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
      <p>Yhteensä tehtäviä on: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} kpl.</p>
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
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App;
