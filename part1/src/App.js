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
// import { useState } from "react"

// const Display = ({counter}) => <div>{counter}</div>
  


// const App = () => {
//   const [ counter, setCounter] = useState(0)
  
//   const increaseByOne = () => setCounter(counter +1)
//   const decreaseByOne = () => setCounter(counter -1)  
//   const setToZero = () => setCounter(0)
    

// const handleClick = () => {
//   console.log('clicked')
// }
 
// setTimeout(
//   () => setCounter(counter +1),
//   1000
// )
// console.log('rendering...', counter)
 
//   console.log('clicked', counter)
//   return (
//     <div>
//     <Display counter={counter}/>  
//     <Button 
//       handleClick={increaseByOne}
//       text = 'plus'
//     />
//     <Button 
//       handleClick={setToZero}
//       text = 'zero'
//     />
//     <Button 
//       handleClick={decreaseByOne}
//       text = 'minus'
//     />
//     </div>
//   )
// }

// const Button = (props) => {
//   console.log('props value is:', props)
//   const { handleClick, text} = props
//   return (
//   <button onClick={handleClick}>
//     {text}
//   </button>
//   )
// }

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join('')}
//     </div>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left +1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right +1)
//   }

//   return (
//     <div>
//       <div>
//         {left}
//         <Button handleClick={handleLeftClick} text='left'/>
//         <Button handleClick={handleRightClick} text='right'/>
//         {right}
//         <History allClicks={allClicks}/>  
//       </div>
//     </div>
//   )
// }

import { useState } from "react"

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [value, setValue] = useState(10)

  // const hello = (who) => () => {    
  //     console.log('hello', who)
  //   }

  const setToValue = (newValue) => {
    console.log('value now', newValue) 
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value}/>
      <Button handleClick={() => setToValue(1000)} text='thousand'/>
      <Button handleClick={() => setToValue(0)} text='reset'/>
      <Button handleClick={() => setToValue(value + 1)} text='increment'/>
    </div>
  )
}

export default App