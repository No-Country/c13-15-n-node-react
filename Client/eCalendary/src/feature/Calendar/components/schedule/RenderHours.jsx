import { useCalendarStore } from "../../../../store/CalendarStore";
import { useScheduleStore } from "../../../../store/ScheduleStore";
import React, { useCallback  } from 'react'
const RenderHours = () => {

    const [selectedHours, setSelectedHours] = useScheduleStore((state) => [state.selectedHours, state.setSelectedHours]);
    const [selectedInterval] = useScheduleStore((state) => [state.selectedInterval]);
    const   [businessCalendary] = useCalendarStore((state) => [ state.businessCalendary]);
    const [busyHours, setBusyHours] = useScheduleStore((state) => [state.busyHours, state.setBusyHours])


    function horas_libres(hora_inicio, hora_fin) {
        const horas = [];
        for (let i = 0; i < 24; i++) {
          if (i < hora_inicio || i >= hora_fin) {
            horas.push(i);
          }
        }
        return horas;
      }

      console.log(businessCalendary)
    if(businessCalendary){
        console.log(horas_libres(businessCalendary.calendary.inicio, businessCalendary.calendary.fin))
    }

    const calculateTotalHours = useCallback(() => {
        return (60 / selectedInterval) * 24;
    }, [selectedInterval]);

    const handleHourClick = (hour) => {
        if (!busyHours.includes(hour)) {
            if (selectedHours.includes(hour)) {
                setSelectedHours(selectedHours.filter((h) => h !== hour));
            } else {
                setSelectedHours([...selectedHours, hour]);
            }
        }
    };

    const totalHours = calculateTotalHours();

    return (
        <div className="grid grid-cols-4 gap-2">
            {
                totalHours && Array.from({ length: totalHours }).map((_, hour) => {
                    const formattedHour = (hour * selectedInterval) / 60;
                    const isBusy = busyHours.includes(formattedHour);

                    return (
                        <button
                            key={formattedHour}
                            onClick={() => handleHourClick(formattedHour)}
                            className={`p-2 rounded-full 
                                ${isBusy 
                                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed ' 
                                    : selectedHours.includes(formattedHour) 
                                        ? ' bg-blue-500 text-white  transition duration-150 ' 
                                        : 'hover:bg-blue-200 hover:text-blue-700 transition duration-150 '
                                }`}
                            disabled={isBusy}
                        >
                            {formattedHour < 10 ? `0${formattedHour.toFixed(2)}` : formattedHour.toFixed(2)}
                        </button>
                    )
                })
            }
        </div>
    )
};
export default React.memo(RenderHours);