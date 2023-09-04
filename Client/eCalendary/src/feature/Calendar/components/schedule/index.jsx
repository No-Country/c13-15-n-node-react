import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useScheduleStore } from '../../../../store/ScheduleStore';
import  RenderHours  from './RenderHours';

const TimePicker = () => {
  const [selectedHours] = useScheduleStore((state) => [state.selectedHours]);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="text-lg font-semibold">Seleccionar horarios:</label>
        
          <RenderHours/>
      </div>
      <div>
        <p className="text-lg font-semibold">Horarios seleccionados:</p>
        <ul className='inline min-h-unit-8'>
          {selectedHours.map((hour) => (
            <span key={hour}>{hour < 10 ? `0${hour}` : hour.toFixed(2)} | </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimePicker;
