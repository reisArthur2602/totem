import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { ClockTime } from './clock-time';
import { Logo } from './logo';

export const AppShell = () => {
    return (
        <main className="flex-1 flex-col flex mx-auto max-w-3xl ">
            <motion.header
                className="py-8 flex items-center justify-between mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Logo />
                <ClockTime />
            </motion.header>

            <Outlet />
        </main>
    );
};
