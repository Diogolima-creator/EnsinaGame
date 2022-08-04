import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Redirect = () => {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  })

  return <h1> Redirecionando </h1>
}

export default Redirect;