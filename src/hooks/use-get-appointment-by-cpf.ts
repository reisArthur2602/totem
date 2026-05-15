import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getAppointmentByCpf } from '../http/get-appointment-by-cpf';
import { useAppointmentStore } from '../stores/appointment';

interface UseGetAppointmentByCpfVariables {
    cpf: string;
}

export const useGetAppointmentByCpf = () => {
    const navigate = useNavigate();

    const { setAppointments } = useAppointmentStore();

    const { mutateAsync: getAppointment } = useMutation({
        mutationFn: async (variables: UseGetAppointmentByCpfVariables) => {
            const response = await getAppointmentByCpf(variables.cpf);

            return response;
        },
        onSuccess: (data) => {
            setAppointments(data.dados ?? []);
            navigate('/app/cpf', { replace: true });
        },

        onError: (error) => {
            const message =
                error instanceof AxiosError && error.response?.data?.mensagem
                    ? error.response.data.mensagem
                    : 'Erro ao buscar agendamento';
            toast.error(message);
        },
    });

    return { getAppointment };
};
