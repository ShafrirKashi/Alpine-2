import React from 'react'
import './Picturebox.css'
import Button from '../../UIKIt/Button/Button'

const Picturebox = (props) => {
  return (
    <div className='container3grid'>
      <div className='box1'>
        <div className='box1text'>All-Weather Hiking Gear</div>
        <div className='buttonbox1'>
          <Button text='Shop Now' />
        </div>
      </div>
      <div className='box2'>
        <div className='box2text'>Ultimate Breathable Protection</div>
        <div className='buttonbox2'>
          <Button text='Shop Now' />
        </div>
      </div>
      <div className='box3'>
        <div className='buttonbox3'>
          <Button text='Shop for Women' />
        </div>
      </div>
      <div className='box4'>
        <div className='buttonbox4'>
          <Button text='Shop for Men' />
        </div>
      </div>
    </div>
  )
}

export default Picturebox
