import React from 'react'
import FormCustom from '../components/Form/index'

const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <FormCustom title="Registro" ruta={'https://c13-15-e-calendary.onrender.com/users'}/>
    </div>
  )
}

export default Register