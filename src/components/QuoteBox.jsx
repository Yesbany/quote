import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, newQuote, color}) => {
  return (
    <div className='container--cita cont-animation' style={{color: color}}>
        {/* <img src='https://api.lorem.space/image/movie?w=150&h=220' alt='img'/> */}
        <p className='quote--parrafo '>{quote.quote}</p>
        <h3 className='quote--author'>{quote.author}</h3>        
        <i className='bx bxs-quote-left quote--icon--left'></i>
        <i class='bx bxs-quote-right quote--icon--right'></i>
        <QuoteButton newQuote={newQuote} color={color}/>
    </div>
  )
}

export default QuoteBox