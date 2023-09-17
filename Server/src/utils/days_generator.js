<<<<<<< HEAD
const translate_to_days_number = function( day ) {
    return [
        'domingo','lunes', 'martes', 'miercoles', 'jueves'
        , 'viernes', 'sabado'
    ].indexOf( day );
}
const translate_to_months_number = function( month ) {
    return [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'
        , 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ].indexOf(month)+1;
}
const month_days = month=>{
    let first,last
    const dates = [];
    const increment = 24 * 3600 * 1000;
    const converter = ['01', '02', '03', '04', '05', '06', '07', '08', '09'
        , '10', '11', '12'];
    if(month===12){
     first = new Date(`2023-${converter[month-1]}-01`);
     last = new Date(`2024-${converter[month-12]}-01`);
    }
    else{ 
    first = new Date(`2023-${converter[month-1]}-01`);
    last = new Date(`2023-${converter[month]}-01`);
    }
    for (i = first.valueOf()+increment; i <=last.valueOf(); i += increment) {
=======
const translate_to_days_number = function (day) {
    return [
        'domingo', 'lunes', 'martes', 'miercoles', 'jueves'
        , 'viernes', 'sabado'
    ].indexOf(day);
}
const MONTHS = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'
    , 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]

const month_days = function (month) {
    const increment = 24 * 3600 * 1000;
    /**
     * VALIDAR DISTANCIA ENTRE MESES PARA DETERMINAR
     * LOS AÑOS DE LAS FECHAS
     **/

    const first_month = month;
    const last_month = (month + 1) % 12
    const CURRENT_YEAR = new Date().getFullYear()
    const LAST_YEAR = first_month < last_month ? CURRENT_YEAR : CURRENT_YEAR + 1;
    const first = new Date(CURRENT_YEAR, first_month, 1);
    const last = new Date(LAST_YEAR, last_month, 1);
    const dates = [];
    for (i = first.valueOf(); i < last.valueOf(); i += increment) {
>>>>>>> back
        dates.push(new Date(i));
    }
    return dates;
}
<<<<<<< HEAD
const generate_days_from = params =>{
    const months = params['months'].map( (month) => translate_to_months_number( month ) );
    const days = params['days'].map( day => translate_to_days_number(day) );
    return months.reduce((dates, month) => {
    return dates.concat(month_days(month).filter(day =>days.includes(day.getDay())))
    }, []);
}

=======

const generate_days_from = function (params) {
    const months = params.months.map((month) => MONTHS.indexOf(month));
    const days = params.days.map((day) => translate_to_days_number(day));
    return months.reduce((dates, month) => {
        return dates.concat(month_days(month)
            .filter(day => days.includes(day.getDay())))
    }, []);
}


>>>>>>> back
module.exports = generate_days_from;