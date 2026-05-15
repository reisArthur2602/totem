import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { useState, type SubmitEvent } from 'react';
import { AiThinking } from '../../../components/ai-thinking';
import { Headline } from '../../../components/headline';
import { PageAnimation } from '../../../components/page-animation';
import { Button } from '../../../components/ui/button';
import { formatCpf, isValidCpf } from '../../../helpers/cpf';
import { useGetAppointmentByCpf } from '../../../hooks/use-get-appointment-by-cpf';

export const CheckIn = () => {
    const [loading, setLoading] = useState(false);
    const [cpf, setCpf] = useState('');
    const cpfIsValid = isValidCpf(cpf);

    const { getAppointment } = useGetAppointmentByCpf();

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        // remover pontuação do cpf
        const cleanCpf = cpf.replace(/\D/g, '');

        setTimeout(() => {
            getAppointment({ cpf: cleanCpf });
            setLoading(false);
        }, 3000);
    };

    return (
        <PageAnimation>
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="thinking"
                        className="min-h-100 flex items-center justify-center "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <AiThinking text="Buscando seu agendamento" key="thinking" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Headline
                            icon={User}
                            title="Digite o seu CPF"
                            subtitle="Informe seu CPF para localizar seu cadastro e continuar o atendimento."
                        />

                        <motion.form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <motion.input
                                className="rounded-2xl border-2 border-primary bg-card p-6 text-center text-4xl text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/30"
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
                                    className="relative"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-primary/20 rounded-xl blur-lg"
                                        animate={{
                                            opacity: [0.5, 0.8, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: easeInOut,
                                        }}
                                    />
                                    <Button className="w-full text-2xl font-bold flex items-center justify-center gap-2 relative z-10">
                                        Continuar o atendimento
                                        <ArrowRight className="size-8" />
                                    </Button>
                                </motion.div>
                            )}
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageAnimation>
    );
};
