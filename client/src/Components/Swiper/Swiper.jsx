import React from 'react'
import './Swiper.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import Rating from '../../UIKIt/Rating/Rating'
import { useNavigate } from 'react-router-dom'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export default ({ productslist, header, imgsrc }) => {
  const navigate = useNavigate()

  const handleSelected = (id) => {
    navigate('/products/' + id)
  }
  return (
    <div className='asd'>
      <p className='latest'>
        {header}
        <img className='apexlogo' src={imgsrc} alt='' />
      </p>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3.35}
        navigation
        grabCursor={true}
      >
        {productslist.map((product) => (
          <SwiperSlide key={product._id}>
            <img
              onClick={() => handleSelected(product._id)}
              className='product-card'
              src={product.image}
              alt=''
            />
            <div className='product-details'>
              <p className='product-name'>{product.name}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
