import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const CalendarCustom = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());


  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isWeekend = (dayIndex) => {
    // Domingo (0) y sábado (6) son fines de semana.
    return dayIndex === 0 || dayIndex === 6;
  };
  
  const isDisabledDate = (date) => {
    // Agrega tu lógica para deshabilitar días específicos aquí.
    // Por ejemplo, si quieres deshabilitar fines de semana:
    // return isWeekend(date.getDay());
    return isWeekend(date.getDay());
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
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

  const renderWeekHeader = () => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <header className='grid grid-cols-7 gap-1'>
            {
                weekDays.map((day, index) => (
                    <div key={index} className="text-center font-semibold">
                        {day}
                    </div>
                ))
            }
        </header>
    )

  };

  const renderCalendar = () => {
    const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const totalDays = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const days = [];

    // Agregar días en blanco para alinear con el día correcto de la semana.
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`blank-${i}`} className="p-2" />);
    }

    for (let i = 1; i <= totalDays; i++) {
      const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      days.push(
        <button
          key={i}
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
          {i}
        </button>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-1 ">
        {days}
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 ">
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
        {renderWeekHeader()}
        {renderCalendar()}
      </div>
    </div>
  );
};

export default CalendarCustom;
