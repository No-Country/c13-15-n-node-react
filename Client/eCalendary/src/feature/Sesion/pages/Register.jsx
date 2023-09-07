import React from 'react'
import FormCustom from '../components/Form/index'
import Navbar from '../../../componets/Navbar/Navbar'
import { PATH_REGISTER } from '../../../routers/routerPaths'


const Register = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <FormCustom title="Registro" ruta={`http://localhost:3000/api${PATH_REGISTER}`}/>
      </div>
    </>
  )
}

export default Register