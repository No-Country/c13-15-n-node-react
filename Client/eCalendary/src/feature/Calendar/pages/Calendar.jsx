import React, { useEffect, useState } from 'react'
import CalendarCustom from '../components/calendar'
import {  Divider} from "@nextui-org/react";
import TimePicker from '../components/schedule';
import ModalDateConfirm from '../components/ModalDateConfirm';
import axios from 'axios'
import { PATH_API_GET_SERVICIO } from '../../../routers/routerApi'


const Calendar = () => {
    const [state, setState] = useState({})

    const id = '33508350-1575-4ee9-8baa-5b8a7ec7319e'
    useEffect(()=> {
        axios
            .get(PATH_API_GET_SERVICIO + id)
            .then((response) => {
                const data = response.data
                setState(data)
            })
            .catch((error) => {
                console.log('Error en la obtencio del dato ', error)
            })
    }, [])

    // // const titulo = Object.values(state)[0].jobName
    // const titulo = state.jobName
    // console.log(titulo)


    return (
        <div className="flex flex-col items-center justify-start min-h-screen gap-4 m-auto py-8">

            <h1 className='text-center text-2xl'>
                {
                    state.jobName
                }
            </h1>
            <div className='w-full flex flex-col lg:flex-row justify-center align-middle  gap-4 mb:gap-0'>
                <CalendarCustom />
                <Divider orientation="horizontal" className='lg:hidden ' />
                <div className='flex flex-col w-full max-w-md mx-auto'>
                    <TimePicker />
                    <ModalDateConfirm/>
                </div>
            </div>
        </div>
    )
}

export default Calendar