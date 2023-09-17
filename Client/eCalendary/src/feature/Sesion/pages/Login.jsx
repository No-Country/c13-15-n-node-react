import React from 'react'
import FormCustom from '../components/Form/index'
import Navbar from '../../../componets/Navbar/Navbar'
import { PATH_LOGIN } from '../../../routers/routerPaths'

const Login = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <FormCustom title="Sesion" ruta={`http://localhost:3000/api${PATH_LOGIN}`}/>
      </div>
    </>
  )
}

export default Login