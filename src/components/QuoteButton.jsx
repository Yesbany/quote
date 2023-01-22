import React from 'react'

const QuoteButton = ({newQuote, color}) => {
  return (
    <button style={{backgroundColor: color}} onClick={newQuote} className='button'>
        <i className='bx bxs-right-arrow'></i>
    </button>
  )
}

export default QuoteButton