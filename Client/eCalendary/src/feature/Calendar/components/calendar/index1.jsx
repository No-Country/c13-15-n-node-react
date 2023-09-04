import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const CalendarCustom = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const isWeekend = (dayIndex) => {
    // Domingo (0) y sábado (6) son fines de semana.
    return dayIndex === 0 || dayIndex === 6;
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isDisabledDate = (date) => {
    // Aquí puedes agregar tu lógica para deshabilitar días específicos.
    // Por ejemplo, si quieres deshabilitar fines de semana o un array de días:
    // return isWeekend(date.getDay()) || disabledDates.includes(date.getDate());
    return isWeekend(date.getDay());
  };

  const changeMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(currentMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(currentMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const getDayName = (dayIndex) => {
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return dayNames[dayIndex];
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth('prev')} className="text-gray-600">
          {'<'}
        </button>
        <h2 className="text-lg font-semibold">
          {currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={() => changeMonth('next')} className="text-gray-600">
          {'>'}
        </button>
      </div>
      <div className="mt-4">
        {selectedDate && (
          <p className="mb-2">Selected Date: {selectedDate.toDateString()}</p>
        )}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth()) }, (_, index) => {
            const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index + 1);
            return (
              <button
                key={index}
                className={`p-2 rounded-full ${
                  isDisabledDate(currentDate) ? 'bg-gray-300 text-gray-600' : ''
                } ${
                  currentDate.getDate() === (selectedDate?.getDate() || -1) &&
                  currentDate.getMonth() === (selectedDate?.getMonth() || -1)
                    ? 'bg-blue-500 text-white'
                    : ''
                }`}
                onClick={() => setSelectedDate(currentDate)}
                disabled={isDisabledDate(currentDate)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        {Array.from({ length: 7 }, (_, dayIndex) => (
          <div key={dayIndex} className="text-center">
            {getDayName(dayIndex)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarCustom;
