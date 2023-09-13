import React from 'react'
import FormCustom from '../components/Form/index'


const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <FormCustom title="Sesion" ruta={'https://c13-15-e-calendary.onrender.com/auth/login'}/>
    </div>
  )
}

export default Login