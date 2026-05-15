import { axiosConnection } from '../lib/axios';

interface AppointmentResponse {
    ok: boolean;
    cpf: string;
    total: number;
    dados?: Appointment[];
    mensagem?: string;
}

export const getAppointmentByCpf = async (cpf: string): Promise<AppointmentResponse> => {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);

    const dataInicial = today.toISOString().split('T')[0];
    const dataFinal = futureDate.toISOString().split('T')[0];

    const { data } = await axiosConnection.post<AppointmentResponse>(
        '/api/agenda/listaagendamentoporcpf',
        {
            cpfPaciente: cpf,
            dataInicial,
            dataFinal,
            idLocal: 2,
        }
    );

    return data;
};
