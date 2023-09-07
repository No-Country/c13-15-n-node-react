import {Select, SelectItem} from "@nextui-org/react";
import style from './style.module.css'


  export default function  MySelect({
    lista = [],
    titulo = " ",
    seleccionMultiple = false
  }) {
    return (
      <Select
      label= {titulo}
      placeholder={titulo}
      selectionMode = {seleccionMultiple ? "multiple" : "single"}
      className=""
    >
      {lista.map((item) => (
        <SelectItem key={item.value} textValue={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
  
  }