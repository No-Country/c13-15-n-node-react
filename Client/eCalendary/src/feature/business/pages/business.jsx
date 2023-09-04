import React from 'react'
import { Button, Textarea } from '@nextui-org/react'
import MySelect from '../components/MySelect'
import { Hora, dias, intervalo, meses } from '../../../_mocks_/bussinessMocks'

const Business = () => {
  return (
    <div className=' '>
      Business
      <Textarea
        label="Nombre"
        labelPlacement="outside"
        placeholder="Descripcion"
        className="max-w-xs"
      />
      <MySelect lista={meses} titulo="Meses de Año" seleccionMultiple = {true}/>
      <MySelect lista={dias} titulo="Dias" seleccionMultiple = {true}/>
      <MySelect lista={Hora} titulo="Hora" seleccionMultiple = {true}/>
      <MySelect lista={intervalo} titulo="Intervalo" />
      
      <Button color="primary" fullWidth>
        Crear
      </Button>
    </div>
  )
}

export default Business
