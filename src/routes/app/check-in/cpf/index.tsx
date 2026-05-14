import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headline } from '../../../../components/headline';
import { PageAnimation } from '../../../../components/page-animation';
import { Button } from '../../../../components/ui/button';
import { formatCpf, isValidCpf } from '../../../../helpers/cpf';

export const CheckInCpf = () => {
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();

    const cpfIsValid = isValidCpf(cpf);

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

            <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 my-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <motion.input
                    className="bg-card px-5 py-6 border rounded-2xl text-4xl text-center outline-none text-primary-foreground"
                    placeholder="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(formatCpf(e.target.value))}
                    inputMode="numeric"
                    maxLength={14}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileFocus={{ scale: 1.02 }}
                />

                <motion.div
                    className="flex gap-3 "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.5,
                        staggerChildren: 0.1,
                    }}
                >
                    <Button
                        variant="secondary"
                        className="flex-1"
                        type="button"
                        onClick={() => navigate('/')}
                    >
                        Voltar
                    </Button>
                    <Button variant="primary" className="flex-1" disabled={!cpfIsValid}>
                        Realizar Consulta
                    </Button>
                </motion.div>
            </motion.form>
        </PageAnimation>
    );
};
