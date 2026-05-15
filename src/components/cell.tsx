import { easeInOut, motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface CellProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    index?: number;
}

export const Cell = ({ title, value, icon: Icon, index = 0 }: CellProps) => {
    return (
        <motion.div
            className="flex gap-4 items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.1,
                ease: easeInOut,
            }}
        >
            <Icon className="size-6 text-primary shrink-0 mt-1" />
            <div>
                <p className="text-sm text-muted-foreground">{title}</p>
                <p className="text-xl font-semibold text-primary-foreground capitalize">
                    {value}
                </p>
            </div>
        </motion.div>
    );
};
