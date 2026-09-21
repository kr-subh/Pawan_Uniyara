import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Players from './data'

console.log(Players);

// function App() {
//   const [count, setCount] = useState(0)

  

//   return (

//     // <div style={}></div>
//     {
//       Players.map((Element)=>{
//         return (
//           <div key={Element.id}>
//           <h1>{Element}</h1>
          
//           </div>
//         )

//       })
//     }

// import Players from "./players";

function App() {
  // use map to iterate over Players
  return (<div>{Players.map((player) => (
    <div key={player.id}>
      <h1>{player.name}</h1>
      <p>Role: {player.role}</p>
      <p>Runs: {player.runs}</p>
      <p>Playing: {player.playing ? "Yes" : "No"}</p>
    </div>
  ))}</div>);
}

export default App;
    