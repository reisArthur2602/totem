import { motion } from 'framer-motion';
import { AlertCircle, CalendarClock, Clock, User } from 'lucide-react';
import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Cell } from '../../../../components/cell';
import { Headline } from '../../../../components/headline';
import { PageAnimation } from '../../../../components/page-animation';
import { Button } from '../../../../components/ui/button';

export const CheckInConfirm = () => {
    const { cpf } = useParams();

    if (!cpf) return <Navigate to="/app" replace />;

    const appointment = {
        id: React.useId(),
        patient: {
            name: 'Arthur de Souza Reis Costa',
            cpf: '213.205.497-56',
        },
        doctor: 'Teste',
        date: '13/05/2026',
        time: '15:30',
        location: 'Clínica Central',
        type: 'Consulta de Rotina',
        status: 'confirmed',
    };

    const navigate = useNavigate();

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

    const appointmentData = [
        { title: 'Paciente', value: appointment.patient.name, icon: User },
        {
            title: 'Agendamento',
            value: `${appointment.time}`,
            icon: Clock,
        },
        { title: 'Profissional', value: appointment.doctor, icon: User },
    ];

    return (
        <PageAnimation>
            <div className="space-y-8">
                <Headline
                    icon={CalendarClock}
                    title="Confirme sua chegada"
                    subtitle="Verifique os seus dados e confirme sua presença"
                />

                <motion.div
                    className="bg-card rounded-2xl p-6 space-y-4 border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {appointmentData.map((appointment, index) => (
                        <Cell
                            key={appointment.value}
                            value={appointment.value}
                            icon={appointment.icon}
                            title={appointment.title}
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
                            Você poderá confirmar sua presença apenas a partir de 20 minutos antes
                            da consulta.
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
            </div>
        </PageAnimation>
    );
};
