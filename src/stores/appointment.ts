import { create } from 'zustand';

interface AppointmentStore {
    appointments: Appointment[];
    selectedAppointment: Appointment | null;
    setAppointments: (appointments: Appointment[]) => void;
    setSelectedAppointment: (appointment: Appointment | null) => void;
    clearAppointments: () => void;
}

export const useAppointmentStore = create<AppointmentStore>((set) => ({
    appointments: [],
    selectedAppointment: null,
    setAppointments: (appointments) => set({ appointments }),
    setSelectedAppointment: (appointment) => set({ selectedAppointment: appointment }),
    clearAppointments: () => set({ appointments: [], selectedAppointment: null }),
}));
