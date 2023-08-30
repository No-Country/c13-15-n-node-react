import React from "react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react"

//Duracion por cita
export function Hora() {
  return (
    <Select label="Duracion por cita" className="max-w-xs">
      <SelectSection showDivider title="Hora">
        <SelectItem key="15 min">15 Min</SelectItem>
        <SelectItem key="Lunes">30 Min</SelectItem>
        <SelectItem key="Martes">1 Hora</SelectItem>
      </SelectSection>
    </Select>
  );
}
