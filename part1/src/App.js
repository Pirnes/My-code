const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const Testi = (props) => {
  return (
    <div>
      <p>{props.name2} and {props.name} are together {props.age} years!</p>
    </div>
  )
}

const App = () => {
  const nimi = 'pekka'
  const nimi2 = 'Maya'
  const ika = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10}/>
      <Hello name={nimi} age={ika}/>
      <Testi name2={nimi2} name={nimi} age={26 + 10 + ika}/>

    </div>
  )
}
export default App