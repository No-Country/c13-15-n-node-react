import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const TimePicker = () => {
  const [selectedInterval, setSelectedInterval] = useState(60);
  const [busyHours, setBusyHours] = useState([9, 10, 10.25, 11, 12, 13, 14]);
  const [selectedHours, setSelectedHours] = useState([]);

  const handleIntervalChange = (e) => {
    setSelectedInterval(parseInt(e.target.value));
  };

  const handleHourClick = (hour) => {
    if (!busyHours.includes(hour)) {
      if (selectedHours.includes(hour)) {
        setSelectedHours(selectedHours.filter((h) => h !== hour));
      } else {
        setSelectedHours([...selectedHours, hour]);
      }
    }
  };

  const calculateTotalHours = () => {
    return 60 / selectedInterval * 24;
  };

  const renderHours = () => {
    const hours = [];
    const totalHours = calculateTotalHours();

    for (let hour = 0; hour < totalHours; hour++) {
      const formattedHour = hour * selectedInterval / 60;
      const isBusy = busyHours.includes(formattedHour);

      hours.push(
        <button
          key={formattedHour}
          onClick={() => handleHourClick(formattedHour)}
          className={`p-2 rounded-full ${
            isBusy ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : selectedHours.includes(formattedHour) ? 'bg-blue-500 text-white' : ''
          }`}
          disabled={isBusy}
        >
          {formattedHour < 10 ? `0${formattedHour}` : formattedHour.toFixed(2)}
        </button>
      );
    }
    return hours;
  };

  console.log({selectedHours});

  return (
    <div className="w-full max-w-md mx-auto p-4">

      <div className="mb-4 hidden">
        <label htmlFor="interval" className="text-lg font-semibold">Seleccionar intervalo:</label>
        <select
          id="interval"
          value={selectedInterval}
          onChange={handleIntervalChange}
          className="block border rounded px-3 py-2 mt-2"
        >
          <option value={15}>15 minutos</option>
          <option value={30}>30 minutos</option>
          <option value={45}>45 minutos</option>
          <option value={60}>1 hora</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-lg font-semibold">Seleccionar horarios:</label>
        <div className="grid grid-cols-4 gap-2">
          {renderHours()}
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">Horarios seleccionados:</p>
        <ul className='inline'>
          {selectedHours.map((hour) => (
            <span key={hour}>{hour < 10 ? `0${hour}` : hour.toFixed(2)} | </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimePicker;
