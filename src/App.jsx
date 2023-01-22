import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"
 // ARREGLO DE COLORES ALEATORIO
const arrayColors = ["#00c6ab", "#c8ad8d", "#f86f6f", "#6aa3b4", "#15ab92", "#1e91ed", "#ffa43a", "#1d3d33", "#d6a735", "#ff7052", "#2196f3", "#003785", "#b57edc", "#8f6277"];
const getRandom = (arrayElemets) => {
    const quantityValues = arrayElemets.length
    const randomIndex = Math.floor(Math.random() * quantityValues)
    return arrayElemets[randomIndex]
  }

function App() {
  
  const [quote, setQuote] = useState(getRandom(db))   
  // CREAR ESTADO PARA ALMACENAR COLORES
  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))   
  }

  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox quote={quote} newQuote={newQuote} color={color}/>    
    </div>
  )
}

export default App
