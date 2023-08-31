import React from 'react'
import CalendarCustom from '../components/calendar'
import {Divider} from "@nextui-org/react";
import TimePicker from '../components/schedule';

const Calendar = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen">

      <div className='w-full flex flex-col lg:flex-row justify-center align-middle m-auto gap-4'>

        <CalendarCustom/>
        <Divider orientation="horizontal" className='lg:hidden ' />
        <TimePicker/>
      </div>
    </div>
  )
}

export default Calendar