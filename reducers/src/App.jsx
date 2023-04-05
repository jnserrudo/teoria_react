import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Contador } from './components/Contador'
import { ContadorMejorado } from './components/ContadorMejorado'
import { ShoppingCart } from './components/ShoppingCart'
import "./style.css";


function App() {
 
  
  return(
    <div className='cont_arts'>
      <h1>useReducers</h1>
      <hr></hr>
      <ShoppingCart/>
      <hr></hr>
      <ContadorMejorado></ContadorMejorado>
      <hr></hr>
      <Contador></Contador>
    </div>
  )
}

export default App
