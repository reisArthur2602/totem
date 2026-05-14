import { easeInOut, motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

interface PageAnimationProps extends PropsWithChildren {
    delay?: number;
}

export const PageAnimation = ({ children, delay = 0 }: PageAnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.5,
                delay,
                ease: easeInOut,
            }}
            className="wrapper"
        >
            {children}
        </motion.div>
    );
};
