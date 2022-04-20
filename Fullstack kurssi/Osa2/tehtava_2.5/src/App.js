import Course from './components/Course'

const App = () => {
  
  const courses = [
    {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  const initialValue = 0
  const total = courses[0].parts.reduce( 
    (previousValue, currentValue) => previousValue + currentValue.exercises, initialValue)

  const total2 = courses[1].parts.reduce( 
  (previousValue, currentValue) => previousValue + currentValue.exercises, initialValue)

  return (
    <div>
      <h1>Web development curriculum</h1>
      <h2>{courses[0].name}</h2>
      {courses[0].parts.map(part =>
      <Course key={part.id} part={part}/>
      )}<p></p>
      <h4>total of {total} exercises</h4><p></p>
      <h2>{courses[1].name}</h2>
      {courses[1].parts.map(part =>
      <Course key={part.id} part={part}/>)}
      <h4>total of {total2} exercises</h4><p></p>
    </div>
  )
}

export default App;
