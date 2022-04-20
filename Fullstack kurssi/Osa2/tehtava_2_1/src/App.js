import Part from './components/part'

const App = (props) => {
  console.log(props.name)

  return (
    <div>
      <h1>{props}</h1>
    </div>
  )
}

export default App