const isWeekend = (dayIndex) => {
    // Domingo (0) y sábado (6) son fines de semana.
    return dayIndex === 0 || dayIndex === 6;
};
const isDayPast = (date) =>{
    return (date < new Date())
}
export const isWorkingDay = (date) => {
    // Agrega tu lógica para deshabilitar días específicos aquí.
    // Por ejemplo, si quieres deshabilitar fines de semana:
    // return isWeekend(date.getDay());
    return isWeekend(date.getDay()) || isDayPast(date);
};

export const nearestWorkingDay = (date) => {
    // Domingo (0) y sábado (6) son fines de semana.

    if (isWeekend(date.getDay())) {
        switch (date.getDay()) {
            case 0: //Domingo (0)
                return date.setDate(date.getDate() + 1)
        
            case 6: //sábado (6)
                return date.setDate(date.getDate() + 2)
        }
    }else{
        return date
    }
};

