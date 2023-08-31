import React from 'react'
import { Button } from '@nextui-org/react'
import { Textarea1 } from '../components'
import MySelect from '../components/MySelect'

const Business = () => {
  return (
    <div className=' '>
      Servicios
      <Textarea1></Textarea1>
      <MySelect></MySelect>
      <Button color="primary">
        Crear
      </Button>
    </div>
  )
}

export default Business
