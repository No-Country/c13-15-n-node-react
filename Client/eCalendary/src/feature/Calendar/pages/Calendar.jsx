import React from 'react'
import CalendarCustom from '../components/calendar'
import { Button, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import TimePicker from '../components/schedule';
import { useCalendarStore } from '../../../store/CalendarStore';
import { toDateFormater, toInputDate } from '../../../utils/formaterDate';
import { useScheduleStore } from '../../../store/ScheduleStore';


const Calendar = () => {
    const selectedDate = useCalendarStore((state) => state.selectedDate)
    const [selectedHours] = useScheduleStore((state) => [state.selectedHours]);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    console.log({ selectedDate,selectedHours });

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
                                <ModalBody className='flex gap-8'>

                                    <Input type="text" variant='bordered' 
                                        label="Nombre del cliente" placeholder="Juan Ramirez" required
                                        labelPlacement="outside"
                                        description="Es necesario que ingreses tu nombre para realizar el registro"
                                    />

                                    <Input type="text" variant='bordered' 
                                        label="Asunto" placeholder="Ingresa un asunto"
                                        labelPlacement="outside"
                                        description="Indicar el asunto es opcional"

                                     />

                                    <Input 
                                        onlyRead={true} disabled={true}
                                        type="date" variant='bordered'
                                        label="Dia de la reserva" placeholder="fecha"
                                        value={toInputDate(selectedDate)}
                                        labelPlacement="outside"
                                        description={toDateFormater(selectedDate)}
                                    />

                                    <ul>
                                        <li>Horario de la reserva: ____</li>
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