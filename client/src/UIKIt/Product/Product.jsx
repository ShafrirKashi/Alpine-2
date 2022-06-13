import React, { useContext } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import Rating from '../../UIKIt/Rating/Rating'
import dataContext from '../../Context/dataContext'

function Product() {
  const params = useParams()

  const { Products, Apex, isLoading } = useContext(dataContext)

  const prod = Products.findIndex((x) => x._id === params.id)
  const apex = Apex.findIndex((x) => x._id === params.id)
  if (prod >= 0) {
    return (
      <div className='productPage'>
        <div className='productPage__content'>
          <div className='productPage__content__image'>
            {!isLoading && <img src={Products[prod].image} alt='' />}
          </div>
          <div className='productPage__content__info'>
            {!isLoading && <header>{Products[prod].name}</header>}

            <div className='ratingwrapper'>
              <div className='ratingComp'>
                {!isLoading && (
                  <Rating className='asd' value={Products[prod].rating} />
                )}
              </div>
            </div>
            <div className='pricewrapper'>
              {!isLoading && <price>Price: {Products[prod].price}</price>}
            </div>
            {!isLoading && (
              <description>
                Description: {Products[prod].description}
              </description>
            )}
          </div>
          <div className='productPage__content__add'>
            <div className='addBox'>
              <div className='addPrice'>
                Price:
                {!isLoading && (
                  <div className='addpriceNum'>{Products[prod].price}</div>
                )}
              </div>
              <div className='addStatus'>
                Status:
                <p className='addStatusState'>In Stock</p>
              </div>
              <div className='addBtn'>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='productPage'>
        <div className='productPage__content'>
          <div className='productPage__content__image'>
            {!isLoading && Apex.length > 0 && (
              <img src={Apex[apex].image} alt='' />
            )}
          </div>
          <div className='productPage__content__info'>
            {!isLoading && Apex.length > 0 && (
              <header>{Apex[apex].name}</header>
            )}

            <div className='ratingwrapper'>
              <div className='ratingComp'>
                {!isLoading && Apex.length > 0 && (
                  <Rating className='asd' value={Apex[apex].rating} />
                )}
              </div>
            </div>
            <div className='pricewrapper'>
              {!isLoading && Apex.length > 0 && (
                <price>Price: {Apex[apex].price}</price>
              )}
            </div>
            {!isLoading && Apex.length > 0 && (
              <description>Description: {Apex[apex].description}</description>
            )}
          </div>
          <div className='productPage__content__add'>
            <div className='addBox'>
              <div className='addPrice'>
                Price:
                {!isLoading && Apex.length > 0 && (
                  <div className='addpriceNum'>{Apex[apex].price}</div>
                )}
              </div>
              <div className='addStatus'>
                Status:
                <p className='addStatusState'>In Stock</p>
              </div>
              <div className='addBtn'>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
