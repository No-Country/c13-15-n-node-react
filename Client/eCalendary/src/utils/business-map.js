const coma = ",";


// dias: "Martes,Viernes"
// hora_fin: "5"
// hora_ini: "3"
// intervalo: "60"
// meses: "Febrero,Marzo,Mayo,Julio"
// servicio: "Peluqueria Don Juan"


export const mapDataToSend = (data) => {
    if (data) {
        data.dias = data.dias.split(",")
        data.meses = data.meses.split(",")
        return data
    }
}