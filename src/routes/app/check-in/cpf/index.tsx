import { motion } from 'framer-motion';
import { AlertCircle, Clock, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cell } from '../../../../components/cell';
import { Headline } from '../../../../components/headline';
import { PageAnimation } from '../../../../components/page-animation';
import { Button } from '../../../../components/ui/button';
import { useAppointmentStore } from '../../../../stores/appointment';

const CONFIRMATION_TIME = 30;

export const CheckInCPF = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(CONFIRMATION_TIME);

    const { appointments } = useAppointmentStore();

    useEffect(() => {
        if (appointments.length === 0) navigate('/app', { replace: true });
    }, [appointments, navigate]);

    useEffect(() => {
        if (timeLeft <= 0) {
            navigate('/app', { replace: true });
            return;
        }

        const timer = window.setTimeout(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => window.clearTimeout(timer);
    }, [timeLeft, navigate]);

    if (appointments.length === 0) {
        return null;
    }

    const appointmentData = appointments[0];

    const [day, month, year] = appointmentData.dataMarcada.split('-');

    const appointment = {
        patient: {
            name: appointmentData.nomePaciente,
            cpf: appointmentData.cpf,
        },
        doctor: appointmentData.nomeMedico,
        date: `${day}/${month}/${year}`,
        time: appointmentData.horaMarcada,
        location: appointmentData.localAtendimento,
        type: appointmentData.TipoAtendimento,
        status: 'confirmed',
    };

    const canConfirm = (() => {
        const [day, month, year] = appointment.date.split('/');
        const [hours, minutes] = appointment.time.split(':');
        const appointmentTime = new Date(
            parseInt(year),
            parseInt(month) - 1,
            parseInt(day),
            parseInt(hours),
            parseInt(minutes)
        );
        const fifteenMinutesBefore = new Date(appointmentTime.getTime() - 15 * 60000);
        const now = new Date();
        return now >= fifteenMinutesBefore && now <= appointmentTime;
    })();

    const cellData = [
        { title: 'Paciente', value: appointment.patient.name.toLocaleLowerCase(), icon: User },
        {
            title: 'Agendamento',
            value: `${appointment.time}`,
            icon: Clock,
        },
        { title: 'Profissional', value: appointment.doctor.toLocaleLowerCase(), icon: User },
    ];

    return (
        <PageAnimation>
            <Headline
                title="Confirme sua chegada"
                subtitle="Verifique os seus dados e confirme sua presença"
            />

            <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                        Tempo para confirmar
                    </span>
                    <span className={`text-lg font-bold ${
                        timeLeft <= 10 ? 'text-destructive' :
                        timeLeft <= 15 ? 'text-yellow-500' :
                        'text-primary'
                    }`}>
                        {timeLeft}s
                    </span>
                </div>
                <motion.div
                    className="h-3 bg-muted rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className={`h-full rounded-full ${
                            timeLeft <= 10 ? 'bg-destructive' :
                            timeLeft <= 15 ? 'bg-yellow-500' :
                            'bg-primary'
                        }`}
                        initial={{ width: '100%' }}
                        animate={{ width: `${(timeLeft / CONFIRMATION_TIME) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="bg-card rounded-2xl p-6 space-y-4 border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {cellData.map((cell, index) => (
                    <Cell
                        key={cell.value}
                        value={cell.value}
                        icon={cell.icon}
                        title={cell.title}
                        index={index}
                    />
                ))}
            </motion.div>

            {!canConfirm && (
                <motion.div
                    className="flex gap-2 border rounded-xl p-4 items-start bg-card text-primary-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <AlertCircle className="size-6 " />
                    <p>
                        Você poderá confirmar sua presença apenas a partir de 20 minutos antes da
                        consulta.
                    </p>
                </motion.div>
            )}

            <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
            >
                <Button variant="secondary" className="flex-1" onClick={() => navigate('/')}>
                    Voltar
                </Button>
                <Button
                    variant="primary"
                    className="flex-1"
                    onClick={() => navigate('/app/sucesso', { replace: true })}
                >
                    Confirmar
                </Button>
            </motion.div>
        </PageAnimation>
    );
};
