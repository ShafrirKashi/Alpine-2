import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import ApexProducts from './data/ApexLatest.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Apex from './models/apexModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()
const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    const sampleApex = ApexProducts.map((ApexProduct) => {
      return { ...ApexProduct, user: adminUser }
    })

    await Apex.insertMany(sampleApex)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (err) {
    process.exit(1)
  }
}
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed...'.red.inverse)
    process.exit()
  } catch (err) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

process.argv[2] === '-d' ? destroyData() : importData()
