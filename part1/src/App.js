//const Hello = ({name, age}) => {
//  const bornYear = () => new Date().getFullYear() - age
//
//  return (
//    <div>
//      <p>Hello {name}, you are {age} years old.</p>
//      <p>So you were probably born {bornYear()}?</p>
//    </div>
//  )
//}

// const App = (props) => {
//   const nimi = 'pekka'
//   const ika = 10
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10}/>
//       <Hello name={nimi} age={ika}/>
//     </div>
//   )
// }
import { useState } from "react"

const Display = ({counter}) => <div>{counter}</div>
  
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter] = useState(0)
  
  const increaseByOne = () => setCounter(counter +1)
  const decreaseByOne = () => setCounter(counter -1)  
  const setToZero = () => setCounter(0)
    

  // const handleClick = () => {
  //   console.log('clicked')
  // }
 
  // setTimeout(
  //   () => setCounter(counter +1),
  //   1000
  // )
 
  // console.log('rendering...', counter)
 
  console.log('clicked', counter)
  return (
    <div>
    <Display counter={counter}/>  
    <Button 
      handleClick={increaseByOne}
      text = 'plus'
    />
    <Button 
      handleClick={setToZero}
      text = 'zero'
    />
    <Button 
      handleClick={decreaseByOne}
      text = 'minus'
    />
    </div>
  )
}

export default App