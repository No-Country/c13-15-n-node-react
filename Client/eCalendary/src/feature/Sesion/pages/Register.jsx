import React from 'react'
import FormCustom from '../components/Form/index'
import Navbar from '../../../componets/Navbar/Navbar'

const Register = () => {
  return (
    <>
      <Navbar/>
      <div className='flex justify-center items-center h-screen'>
        <FormCustom title="Registro"/>
      </div>
    </>
  )
}

export default Register