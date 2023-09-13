import axios from 'axios'
import { Button, Input } from '@nextui-org/react'
import MySelect from '../components/MySelect'
import { Hora, dias, intervalo, meses } from '../../../_mocks_/bussinessMocks'
import { useNavigate } from "react-router-dom";
import { PATH_CALENDAR } from '../../../routers/routerPaths';
import { PATH_API_SERVICIO , PATH_API_GET_SERVICIO} from '../../../routers/routerApi';
import { FormProvider, useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schemas/business-schema';
import { formValidation } from '../../../componets/ErrorMessage';
import { mapDataToSend } from '../../../utils/business-map';

const Business = () => {

    const navigate = useNavigate();

    const formMethods = useForm({
        defaultValues: {
            nombre_del_servicio: '',
            meses: '',
            dias: '',
            inicio: '',
            fin: '',
            intervalo: '',
        },
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    
    const {
        register,
        handleSubmit,
        // watch, 
        formState: { isDirty, isValid, errors },
        reset
    } = formMethods;
    
    console.log({ errors });

    const onSubmit = async (data) => {
        if (data) {
            const dataParse = mapDataToSend(data);
            console.log(data)
            console.log(dataParse)
            const token = localStorage.getItem("token")
            console.log(token)
            axios.post(PATH_API_SERVICIO, dataParse, {
                'headers': {
                    Authorization: `JWT ${token}`
            }
            })
                .then((response) => {
                    console.log('Es la data recibida ',{response})
                })
                .catch(error => {
                    console.log('Error al hacer la peticion', error)
                })
            navigate(PATH_CALENDAR)
        }
        reset();
    }

    const getData = async () => {
        const pintar = await axios.get(PATH_API_GET_SERVICIO + id_servicio)
    }

    return (
        <div className='  flex flex-col w-full  '>

            <h1 className='text-center text-2xl p-8'>Datos del servicio</h1>
            
            <FormProvider {...formMethods} >
                <form onSubmit={handleSubmit(onSubmit)}
                    className='w-full grid md:grid-cols-2  p-4 gap-8 m-auto'>

                    <Input
                        {...register("nombre_del_servicio")}
                        label="Nombre del servicio"
                        placeholder="Peluqueria Pepito"
                        labelPlacement="outside"
                        className=""
                        fullWidth
                        errorMessage={formValidation(errors, "nombre_del_servicio")}
                    />
                    <MySelect name="meses"    lista={meses} titulo="Meses de Año laborales" seleccionMultiple={true}     />
                    <MySelect name="dias"     lista={dias} titulo="Dias laborales a ala semana" seleccionMultiple={true} />
                    <MySelect name="inicio" lista={Hora} titulo="Hora de inico del servicio" seleccionMultiple={false} />
                    <MySelect name="fin" lista={Hora} titulo="Hora de cierre del servicio" seleccionMultiple={false} />
                    <MySelect name="intervalo" lista={intervalo} titulo="Intervalo" />

                    <Button 
                        color='primary'
                        variant={ (!isDirty || !isValid) ? "flat" : "shadow" }
                        className='md:col-span-2' isDisable={(!isDirty || !isValid)} type='submit' >
                        Crear
                    </Button>
                </form>
            </FormProvider>

        </div>
    )
}

export default Business
