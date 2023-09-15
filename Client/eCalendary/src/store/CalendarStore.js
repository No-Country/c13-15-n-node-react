import { create } from 'zustand'
import { nearestWorkingDay } from '../utils/workingDays'

export const useCalendarStore = create((set) => ({
  selectedDate: new Date(nearestWorkingDay(new Date())),
  setSelectedDate: (newSelectedDate) =>  set((state) => ({selectedDate : newSelectedDate})),
 
  currentMonth : new Date(),
  setCurrentMonth: (newMonth) =>  set((state) => ({currentMonth : newMonth})),

  businessCalendary : {},
  setBusinessCalendary: (newBusinessCalendary) =>  set((state) => ({businessCalendary : newBusinessCalendary}))
}))

