import React from 'react'
import './Container1.css'
import Button from '../../UIKIt/Button/Button'
const Container1 = (props) => {
  return (
    <div>
      <div className='container1image'>
        <div className='textdiv1'>
          <h1 className='h1_1'>Winters is Coming</h1>
          <h2 className='h2_1'>
            Built for unforgiving conditions. Trusted by professionals across
            the globe.
          </h2>
          <div className='button1'>
            <Button text='Shop Now' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container1
