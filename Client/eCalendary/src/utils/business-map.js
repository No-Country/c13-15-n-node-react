const coma = ",";


// dias: "Martes,Viernes"
// hora_fin: "5"
// hora_ini: "3"
// intervalo: "60"
// meses: "Febrero,Marzo,Mayo,Julio"
// servicio: "Peluqueria Don Juan"



//parsear los datos en minuscula

export const mapDataToSend = (data) => {
    if (data) {
        data.dias = data.dias.split(",")
        data.meses = data.meses.split(",")
        const horarios = {
            inicio: data.inicio,
            fin: data.fin
        }
        return {...data, horarios}
    }
}