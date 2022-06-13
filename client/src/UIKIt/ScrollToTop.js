import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ children }) => {
  const STT = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [STT])

  return children || null
}

export default ScrollToTop
