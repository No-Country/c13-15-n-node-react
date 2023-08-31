import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const TimePicker = () => {
  // Estado para el intervalo de tiempo seleccionado (ejemplo: 30 minutos)
  const [selectedInterval, setSelectedInterval] = useState(30);

  // Estado para las horas ocupadas (puedes poblar esto según tus necesidades)
  const [busyHours, setBusyHours] = useState([9, 10, 11, 12, 13, 14]);

  // Estado para los horarios seleccionados
  const [selectedHours, setSelectedHours] = useState([]);

  const handleIntervalChange = (e) => {
    // Actualizar el intervalo de tiempo seleccionado
    setSelectedInterval(parseInt(e.target.value));
  };

  const handleHourClick = (hour) => {
    // Verificar si la hora está ocupada antes de seleccionarla
    if (!busyHours.includes(hour)) {
      // Agregar o quitar la hora del arreglo de horas seleccionadas
      if (selectedHours.includes(hour)) {
        setSelectedHours(selectedHours.filter((h) => h !== hour));
      } else {
        setSelectedHours([...selectedHours, hour]);
      }
    }
  };

  const renderHours = () => {
    const hours = [];
    for (let hour = 0; hour < 24; hour++) {
      // Verificar si la hora está ocupada
      const isBusy = busyHours.includes(hour);
      hours.push(
        <button
          key={hour}
          onClick={() => handleHourClick(hour)}
          className={`p-2 rounded-full ${
            isBusy ? 'bg-gray-300 cursor-not-allowed' : selectedHours.includes(hour) ? 'bg-blue-500 text-white' : ''
          }`}
          disabled={isBusy}
        >
          {hour < 10 ? `0${hour}` : hour}:{selectedInterval === 60 ? '00' : `00${selectedInterval}`.slice(-2)}
        </button>
      );
    }
    return hours;
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="mb-4">
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
        <ul>
          {selectedHours.map((hour) => (
            <li key={hour}>{hour < 10 ? `0${hour}` : hour}:{selectedInterval === 60 ? '00' : `00${selectedInterval}`.slice(-2)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimePicker;
