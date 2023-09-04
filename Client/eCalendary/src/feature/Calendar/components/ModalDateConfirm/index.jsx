import React, { useMemo } from 'react'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useCalendarStore } from '../../../../store/CalendarStore';
import { useScheduleStore } from '../../../../store/ScheduleStore';
import { toDateFormater, toInputDate } from '../../../../utils/formaterDate';

const ModalDateConfirm = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const selectedDate = useCalendarStore((state) => state.selectedDate)
    const [selectedHours] = useScheduleStore((state) => [state.selectedHours]);

    const InputSelectedDate = useMemo(() => toInputDate(selectedDate), [selectedDate]);
    const descriptionDelectedDate = useMemo(() => toDateFormater(selectedDate), [selectedDate]);


    return (
        <div>
            <Button onPress={onOpen}>Reservar espacio</Button>

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
                                    value={InputSelectedDate}
                                    labelPlacement="outside"
                                    description={descriptionDelectedDate}
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
    )
}


export default React.memo(ModalDateConfirm);