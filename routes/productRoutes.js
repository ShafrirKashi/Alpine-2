import express from 'express'
import AsyncHandler from 'express-async-handler'

const router = express.Router()

import Product from '../models/productModel.js'
import Apex from '../models/apexModel.js'
console.log(Apex)

router.get(
  '/products/',
  AsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)
router.get(
  '/products/:id',
  AsyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id)
    res.json(products)
  })
)

router.get(
  '/apex/',
  AsyncHandler(async (req, res) => {
    const apex = await Apex.find({})
    res.json(apex)
  })
)

router.get(
  '/apex/:id',
  AsyncHandler(async (req, res) => {
    const apex = await Apex.findById(req.params.id)
    res.json(apex)
  })
)

export default router
