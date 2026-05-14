import clsx from 'clsx';
import { easeInOut, motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type Variant = 'success' | 'base';

interface HeadlineProps {
    variant?: Variant;
    title?: string;
    subtitle?: string;
    icon?: LucideIcon;
}

export const Headline = ({ variant = 'base', icon: Icon, title, subtitle }: HeadlineProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: easeInOut },
        },
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {Icon && (
                <motion.div
                    variants={itemVariants}
                    className="p-4 bg-muted/40 text-muted-foreground rounded-xl w-fit mb-4"
                >
                    <Icon
                        className={clsx(
                            'size-7 text-primary',
                            variant === 'success' && 'text-emerald-400!'
                        )}
                    />
                </motion.div>
            )}
            {title && (
                <motion.h2
                    variants={itemVariants}
                    className={clsx(
                        'text-xl font-semibold text-primary-foreground',
                        variant === 'success' && 'text-emerald-400!'
                    )}
                >
                    {title}
                </motion.h2>
            )}

            {subtitle && (
                <motion.h3 variants={itemVariants} className="text-xl text-muted-foreground">
                    {subtitle}
                </motion.h3>
            )}
        </motion.div>
    );
};
