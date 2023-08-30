import { useState } from 'react'
import './App.css'

//import {User} from "@nextui-org/react";

import Business from './feature/business/pages/business';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Business />
      {/* <User   
        name="Jane Doe"
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }}
      /> */}
    
    </>
  )
}

export default App
