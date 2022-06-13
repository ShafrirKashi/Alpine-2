import React from 'react'
import './Container2.css'
import Button from '../../UIKIt/Button/Button'

const FirstWrap = () => {
  return (
    <div className='secondcontainer'>
      {/* <div className="wrap__text1">  */}
      <h1 className='h1_2'>Reset Warmth</h1>
      <h2 className='h2_2'>
        Unrestricted mobility. Lightweight, packable down. The perfect winter
        jacket isn’t a stretch—it’s a fact.
      </h2>
      <div className='button2'>
        <Button text='Shop Now' />
      </div>
    </div>
  )
}

export default FirstWrap
