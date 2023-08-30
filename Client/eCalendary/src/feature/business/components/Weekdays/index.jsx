import {Select, SelectItem, SelectSection} from "@nextui-org/react";
import style from './style.module.css'

//Dias de la semana

const dias = [
  { key: "00", text: "Domingo"},
  { key: "01", text: "Lunes"},
  { key: "02", text: "Martes"},
  { key: "03", text: "Miercoles"},
  { key: "04", text: "Jueves"},
  { key: "05", text: "Viernes"},
  { key: "06", text: "Sabado"},
]

export default function Days() {
  return (
    <Select
      label="Días de la semana"
      placeholder="Seleccione Día"
      className={style.gray}
    >
      <SelectSection showDivider title="Días">
      <SelectItem key={dias.key}> {dias.text}</SelectItem>
        {
          dias.map((dias) => <SelectItem key={dias.key}> {dias.text}</SelectItem>)
        }

      </SelectSection>
    </Select>
  );
}
