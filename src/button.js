import React from 'react'

const Button = ({typeRed = false}) => {
  return (
    <button style={{backgroundColor : typeRed ? '#ffcccc' : '#e6ccff', padding : '8px 12px', margin: '10px'}}>Text</button>
  )
}

export default Button