import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headline } from '../../../../components/headline';
import { PageAnimation } from '../../../../components/page-animation';
import { Button } from '../../../../components/ui/button';

export const CheckInSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <PageAnimation>
            <div className="flex flex-col gap-8 ">
                <Headline
                    icon={CheckCircle2}
                    title="Presença confirmada!"
                    subtitle="Aguarde ser chamado na sala de espera."
                />

                <motion.div
                    className="bg-card rounded-2xl p-6 border space-y-2 "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-sm text-muted-foreground">
                        Você será redirecionado automaticamente em alguns segundos.
                    </p>
                    <p className="text-xl text-primary-foreground font-semibold">
                        Tenha uma ótima consulta!
                    </p>
                </motion.div>

                <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    <Button variant="primary" className="flex-1" onClick={() => navigate('/')}>
                        Voltar ao início
                    </Button>
                </motion.div>
            </div>
        </PageAnimation>
    );
};
