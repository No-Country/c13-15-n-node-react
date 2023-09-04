import { create } from 'zustand'

export const useScheduleStore = create((set) => ({

  busyHours: [9, 10, 10.25, 11, 12, 13, 14],
  setBusyHours: (newBusyHours) =>  set((state) => ({busyHours : newBusyHours})),
 
  selectedHours : [],
  setSelectedHours: (newSelectedHours) =>  set((state) => ({selectedHours : newSelectedHours})),

  selectedInterval: 60,
  setSelectedInterval: (newSelectedInterval) =>  set((state) => ({selectedInterval : newSelectedInterval}))


}))