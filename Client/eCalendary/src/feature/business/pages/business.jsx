import React from 'react'
import { Button, Input } from '@nextui-org/react'
import MySelect from '../components/MySelect'
import { Hora, dias, intervalo, meses } from '../../../_mocks_/bussinessMocks'
import { useNavigate } from "react-router-dom";
import { PATH_CALENDAR } from '../../../routers/routerPaths';

const Business = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(PATH_CALENDAR)

  }

  return (
    <div className='  flex flex-col w-full  '>

      <h1 className='text-center text-2xl p-8'>Datos del servicio</h1>
      <main className='w-full grid md:grid-cols-2  p-4 gap-8 m-auto '>
        <Input
          label="Nombre"
          placeholder="Descripcion"
          className=""
          fullWidth
        />
        <MySelect lista={meses} titulo="Meses de Año" seleccionMultiple = {true}/>
        <MySelect lista={dias} titulo="Dias" seleccionMultiple = {true}/>
        <MySelect lista={Hora} titulo="Hora" seleccionMultiple = {false}/>
        <MySelect lista={Hora} titulo="Hora" seleccionMultiple = {false}/>
        <MySelect lista={intervalo} titulo="Intervalo" />
        
        <Button color="primary" className='md:col-span-2' onClick={() => handleSubmit()}>
          Crear
        </Button>
      </main>

    </div>
  )
}

export default Business
