import React from 'react'
import { Button } from '@nextui-org/react'
import { Textarea1 } from '../components'
import MySelect from '../components/MySelect'
import { Hora, dias, intervalo, meses } from '../../../_mocks_/bussinessMocks'

const Business = () => {
  return (
    <div className=' '>
      Business
      <Textarea1 />
      <MySelect lista={meses} titulo="Meses de Año" seleccionMultiple = {true}/>
      <MySelect lista={dias} titulo="Dias" seleccionMultiple = {true}/>
      <MySelect lista={Hora} titulo="Hora" seleccionMultiple = {true}/>
      <MySelect lista={intervalo} titulo="Intervalo" />
      
      <Button color="primary">
        Crear
      </Button>
    </div>
  )
}

export default Business
