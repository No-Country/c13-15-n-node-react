import {Select, SelectItem} from "@nextui-org/react";
import style from './style.module.css'

// Meses del año

export const meses = [
    { value: "Enero", text: "Enero"},
    { value: "Febrero", text: "Febrero"},
    { value: "Marzo", text: "Marzo"},
    { value: "Abril", text: "Abril"},
    { value: "Mayo", text: "Mayo"},
    { value: "Junio", text: "Junio"},
    { value: "Julio", text: "Julio"},
    { value: "Agosto", text: "Agosto"},
    { value: "Septiembre", text: "Septiembre"},
    { value: "Octubre", text: "Octubre"},
    { value: "Noviembre", text: "Noviembre"},
    { value: "Diciembre", text: "Diciembre"},
  ] 

  export default function  MySelect() {
    return (
      <Select
      label="meses del año"
      placeholder="selecione un mes"
      selectionMode="multiple"
      className="max-w-xs"
    >
      {meses.map((item) => (
        <SelectItem key={item.value} textValue={item.value}>
          {item.text}
        </SelectItem>
      ))}
    </Select>
  );
  
  }