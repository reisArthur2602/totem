interface Appointment {
    id: string;
    patient: {
        name: string;
        cpf: string;
    };
    doctor: string;
    date: string;
    time: string;
    location: string;
    type: string;
    status: 'confirmed' | 'pending' | 'cancelled';
}

export const getAppointmentByCpf = async (cpf: string): Promise<Appointment> => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const mockData: Appointment = {
        id: '12345',
        patient: {
            name: 'Arthur de Souza Reis Costa',
            cpf,
        },
        doctor: 'Teste',
        date: '13/05/2026',
        time: '15:30',
        location: 'Clínica Central',
        type: 'Consulta de Rotina',
        status: 'confirmed',
    };

    return mockData;
};
