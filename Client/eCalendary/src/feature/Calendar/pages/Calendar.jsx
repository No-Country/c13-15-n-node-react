import React, { useEffect, useState } from 'react'
import CalendarCustom from '../components/calendar'
import { Divider } from "@nextui-org/react";
import TimePicker from '../components/schedule';
import ModalDateConfirm from '../components/ModalDateConfirm';
import axios from 'axios'
import { PATH_API_GET_SERVICIO } from '../../../routers/routerApi'
import { useParams } from 'react-router-dom';
import { useCalendarStore } from '../../../store/CalendarStore';
import { noWorkingHours } from '../../../utils/formaterDate';
import { useScheduleStore } from '../../../store/ScheduleStore';


const Calendar = () => {
    const [businessCalendary, setBusinessCalendary] = useCalendarStore((state) => [state.businessCalendary, state.setBusinessCalendary]);
    const [setBusyHours] = useScheduleStore((state) => [state.setBusyHours])

    const { busines_id } = useParams()

    useEffect(() => {
        axios
            .get(PATH_API_GET_SERVICIO + busines_id)
            .then((response) => {
                const data = response.data
                setBusinessCalendary(data)
            })
            .catch((error) => {
                console.log('Error en la obtencio del dato ', error)
            })

        if (businessCalendary && businessCalendary.calendary) {
            const noWorkingH = noWorkingHours(businessCalendary.calendary.inicio, businessCalendary.calendary.fin)
            setBusyHours(noWorkingH)
        }

    }, [busines_id])


    return (
        <div className="flex flex-col items-center justify-start min-h-screen gap-4 m-auto py-8">

            <h1 className='text-center text-2xl'>
                {
                    businessCalendary.jobName
                }
            </h1>
            <div className='w-full flex flex-col lg:flex-row justify-center align-middle  gap-4 mb:gap-0'>
                <CalendarCustom />
                <Divider orientation="horizontal" className='lg:hidden ' />
                <div className='flex flex-col w-full max-w-md mx-auto'>
                    <TimePicker />
                    <ModalDateConfirm />
                </div>
            </div>
        </div>
    )
}

export default Calendar