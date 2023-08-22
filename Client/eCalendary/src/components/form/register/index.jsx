import React from 'react'
import {Button, Card, Divider, Input} from "@nextui-org/react";
import { useForm } from "react-hook-form"
// import {Button, Card, Divider, CardHeader, CardBody, CardFooter, Link, Image} from "@nextui-org/react";

export const Form = ({title = "Register"}) => {

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log({title,data})

//   console.log(watch("email")) // watch input value by passing the name of it

  return (
        <Card className="max-w-[400px] p-4 flex flex-col gap-2">
            {title}
            <Divider/>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
                <Input
                    // isClearable
                    type="email"
                    label="Email"
                    defaultValue="junior@nextui.org" //comment
                    placeholder="alexanderbvart@gmail.com"
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
                    placeholder="Enter your password"
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
                    solid
                </Button>  
            </form>
        </Card>
  )
}
