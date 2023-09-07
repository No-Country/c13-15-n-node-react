import React from 'react'
import {Button, Card, Divider, Input} from "@nextui-org/react";
import { useForm } from "react-hook-form"
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// import { getUser } from '../../services/user';

const FormCustom = ({title, ruta}) => {

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    // axios.post(ruta, data)
    //   .then((response) => {
    //     const token = response.data.token;
    //     localStorage.setItem('token', token);
    //     navigate(response.data.redirect)
    //   })
    //   .catch((error) => {
    //     console.error('Error al realizar la solicitud POST:', error);
    //   });
  }


  return (
        <Card className="max-w-[400px] p-4 flex flex-col gap-2"> 
            {title} 
            {/* {user ? user.name : 'no hay usuario'} */}
            <Divider/>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
                {title == 'Sesion' ? null : 
                  <Input
                      // type={isVisible ? "text" : "password"}
                      type="text"
                      label="Nombre"
                      description="Ingrese su nombre"
                      className="max-w"
                      {...register("username", { required: true })} 
                  />
                }
                <Input
                    // isClearable
                    type="email"
                    label="Correo"
                    description="Ingrese correctamente su correo electronico."
                    onClear={() => console.log("input cleared")}
                    className="max-w"
                    errorMessage={errors.email ? "Por favor ingresa un correo valido" :""}
                    {...register("email", { required: true }) } 
                    // startContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                />
                <Input
                    type={isVisible ? "text" : "password"}
                    label="Contraseña"
                    description="Ingrese correctamente su contraseña"
                    onClear={() => console.log("input cleared")}
                    className="max-w"
                    errorMessage={errors.password ? "Por favor ingresa una contraseña valida" :""}
                    {...register("password", { required: true })} 
                    // startContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                />
                {/* {errors.password && <span>This field is required</span>} */}

                <Button color="primary" variant="shadow" type='submit'>
                  {title === 'Sesion' ? 'Iniciar Sesion' : 'Registrarse'}
                </Button>  
            </form>
        </Card>
  )
}


export default FormCustom