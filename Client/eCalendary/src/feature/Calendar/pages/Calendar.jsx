import React from 'react'
import CalendarCustom from '../components/calendar'
import { Button, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import TimePicker from '../components/schedule';


const Calendar = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-4 m-auto py-8">

      <h1 className='text-center text-2xl'>Peluqueria Don Juan</h1>
      <div className='w-full flex flex-col lg:flex-row justify-center align-middle  gap-4 '>
        <CalendarCustom />
        <Divider orientation="horizontal" className='lg:hidden ' />
        <div className='flex flex-col w-full max-w-md mx-auto'>
          <TimePicker />
          <Button onPress={onOpen}>Reservar espacio</Button>
        </div>
        
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Detalles de la Reserva:</ModalHeader>
                <ModalBody>

                  <Input type="text" variant='bordered' label="Asunto" placeholder="Ingresa un asunto" />

                  <ul>
                    <li>Dia de la reserva: ___</li>
                    <li>Horario de la reserva: ____</li>
                    <li>Asunto:____</li>
                  </ul>

                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Elegir otro horario
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Reservar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}

export default Calendar