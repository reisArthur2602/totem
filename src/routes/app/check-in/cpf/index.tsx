import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headline } from '../../../../components/headline';
import { PageAnimation } from '../../../../components/page-animation';
import { Button } from '../../../../components/ui/button';
import { formatCpf, isValidCpf } from '../../../../helpers/cpf';

const CPF_TIME_LIMIT_IN_SECONDS = 30;

export const CheckInCpf = () => {
    const [cpf, setCpf] = useState('');
    const [timeLeft, setTimeLeft] = useState(CPF_TIME_LIMIT_IN_SECONDS);

    const navigate = useNavigate();

    const cpfIsValid = isValidCpf(cpf);

    const formattedTimeLeft = useMemo(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, [timeLeft]);

    useEffect(() => {
        if (timeLeft <= 0) {
            setCpf('');
            setTimeLeft(CPF_TIME_LIMIT_IN_SECONDS);

            navigate('/app/cpf', { replace: true });
            return;
        }

        const timer = window.setTimeout(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => window.clearTimeout(timer);
    }, [timeLeft, navigate]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (cpfIsValid) {
            navigate(`/app/confirmar/${cpf}`, { replace: true });
        }
    };

    return (
        <PageAnimation>
            <Headline
                icon={User}
                title="Digite o seu CPF"
                subtitle="Informe seu CPF para localizar seu cadastro e continuar o atendimento."
            />

            <motion.div
                className="flex items-center justify-between gap-4 rounded-2xl  bg-card "
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="size-6 text-primary" />
                    <span>Tempo para preencher</span>
                </div>

                <strong className="text-2xl font-bold text-foreground">{formattedTimeLeft}</strong>
            </motion.div>

            <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <motion.input
                    className="rounded-2xl border bg-card px-5 py-6 text-center text-4xl text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/20"
                    placeholder="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(formatCpf(e.target.value))}
                    inputMode="numeric"
                    maxLength={14}
                    autoFocus
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileFocus={{ scale: 1.02 }}
                />

                {cpfIsValid && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <Button variant="primary" className="w-full">
                            Realizar Consulta
                        </Button>
                    </motion.div>
                )}
            </motion.form>
        </PageAnimation>
    );
};
