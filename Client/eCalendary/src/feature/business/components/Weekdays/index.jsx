import {Select, SelectItem, SelectSection} from "@nextui-org/react";
import style from './style.module.css'

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
