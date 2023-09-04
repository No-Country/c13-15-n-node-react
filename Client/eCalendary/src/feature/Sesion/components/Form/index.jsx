import React from 'react'
import {Button, Card, Divider, Input} from "@nextui-org/react";
import { useForm } from "react-hook-form"
// import { getUser } from '../../services/user';

const FormCustom = ({title}) => {

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  console.log(title)

  const onSubmit = (data) => console.log({title, data})

//   console.log(watch("email")) // watch input value by passing the name of it

  return (
        <Card className="max-w-[400px] p-4 flex flex-col gap-2"> 
            {title} 
            {/* {user ? user.name : 'no hay usuario'} */}
            <Divider/>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
                <Input
                    // isClearable
                    type="email"
                    label="Email"
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
                    label="Password"
                    //placeholder="Enter your password"
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
                  {title === 'Login' ? 'Iniciar Sesion' : 'Registrarse'}
                </Button>  
            </form>
        </Card>
  )
}


export default FormCustom