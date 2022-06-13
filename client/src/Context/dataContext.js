import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const dataContext = createContext()

export function DataProvider({ children }) {
  const [Products, setProducts] = useState([])
  const [Apex, setApex] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }

    fetchProducts()
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const fetchApex = async () => {
      setIsLoading(true)
      const { data } = await axios.get('/api/apex')
      setApex(data)
    }

    fetchApex()
    setIsLoading(false)
  }, [])

  return (
    <dataContext.Provider value={{ Products, Apex, isLoading }}>
      {children}
    </dataContext.Provider>
  )
}

export default dataContext
