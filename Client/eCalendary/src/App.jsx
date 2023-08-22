import { useState } from 'react'
import './App.css'

import {User} from "@nextui-org/react";
import { Form } from './components/form/register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <User   
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
      <Form title="Login" />
      <Form title="Register" />
    </>
  )
}

export default App
