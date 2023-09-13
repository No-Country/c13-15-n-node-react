import * as yup from 'yup';

export const schema = yup
  .object({

    servicio: yup
        .string()
        .required('Nombre del servicio es requerido')
        .max(50, 'Nombre del servicio debe ser máximo de 50 caracteres')
        .min(4, 'Nombre del servicio debe tener 4 caracteres')
        ,
    meses: yup.string().required('Selecciona al menos un mes') ,
    dias: yup.string().required('Selecciona al menos un día') ,
    hora_ini: yup.string().required('Selecciona la hora inicial') ,
    hora_fin: yup.string().required('Selecciona la hora final') ,
    intervalo: yup.string().required('Selecciona un intervalo de tiempo') ,
  })
  .required();