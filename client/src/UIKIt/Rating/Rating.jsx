import React from 'react'

function Rating({ value, text }) {
  return (
    <div className='rating'>
      <span>
        <i
          style={{ color: '#f5b800' }}
          className={
            value >= 1
              ? 'fa-solid fa-star'
              : value >= 0.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: '#f5b800' }}
          className={
            value >= 2
              ? 'fa-solid fa-star'
              : value >= 1.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: '#f5b800' }}
          className={
            value >= 3
              ? 'fa-solid fa-star'
              : value >= 2.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: '#f5b800' }}
          className={
            value >= 4
              ? 'fa-solid fa-star'
              : value >= 3.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: '#f5b800' }}
          className={
            value >= 5
              ? 'fa-solid fa-star'
              : value >= 4.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f5b800',
}
export default Rating
