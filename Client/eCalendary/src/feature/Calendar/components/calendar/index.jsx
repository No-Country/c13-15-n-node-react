import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { toPascalCase } from '../../../../utils/formaterString';
import {useCalendarStore} from '../../../../store/CalendarStore'
import { WeekHeader } from './WeekHeader';
import { CalendarDayGrid } from './CalendarDayGrid';
import { toDateFormater } from '../../../../utils/formaterDate';

const CalendarCustom = () => {
    const   [selectedDate, currentMonth, setCurrentMonth] 
                = useCalendarStore((state) => 
            [ state.selectedDate, state.currentMonth, state.setCurrentMonth]);


    const changeMonth = (direction) => {
        const newMonth = new Date(currentMonth);
        if (direction === 'prev') {
            newMonth.setMonth(currentMonth.getMonth() - 1);
        } else {
            newMonth.setMonth(currentMonth.getMonth() + 1);
        }
        setCurrentMonth(newMonth);
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 ">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => changeMonth('prev')} className="text-gray-600">
                    {'<'}
                </button>
                <h2 className="text-lg font-semibold">
                    {toPascalCase(currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' }))}
                </h2>
                <button onClick={() => changeMonth('next')} className="text-gray-600">
                    {'>'}
                </button>
            </div>
            <div className="mt-4">

                <WeekHeader />
                <CalendarDayGrid />

                {selectedDate && (
                    <p className="my-4">
                        Fecha seleccionada: {toDateFormater(selectedDate)}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CalendarCustom;
