import React from 'react'
import FormCustom from '../components/Form/index'
import Navbar from '../../../componets/Navbar/Navbar'


const Login = () => {
  return (
    <>
      <Navbar/>
      <div className='flex justify-center items-center h-screen'>
        <FormCustom title="Sesion"/>
      </div>
    </>
  )
}

export default Login