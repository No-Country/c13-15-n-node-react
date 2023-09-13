import * as yup from 'yup';

export const schema = yup
  .object({

    servicio: yup
        .string()
        .required('Nombre del servicio es requerido')
        .max(50, 'Nombre del servicio debe ser máximo de 50 caracteres')
        .min(4, 'Nombre del servicio debe tener 4 caracteres')
        ,
  })
  .required();