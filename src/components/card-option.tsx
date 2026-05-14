import { easeInOut, motion } from 'framer-motion';
import { Heart, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CardOptionProps {
    title: string;
    description: string;
    to: string;
    icon?: LucideIcon;
}

export const CardOption = ({ description, title, to, icon: Icon = Heart }: CardOptionProps) => {
    return (
        <Link
            to={to}
            className="group block rounded-3xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
            aria-label={`${title}. ${description}`}
        >
            <motion.div
                className="

                    rounded-3xl
                    border
                    bg-card
                    p-8
                    transition-all
                    duration-300
                    hover:border-primary/50
                    hover:bg-card/90
                    active:scale-[0.99]
                "
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: easeInOut, delay: 0.2 }}
            >
                <div className="flex h-full flex-col justify-between gap-4">
                    <motion.div
                        className="
                            flex
                            size-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-muted/40
                            transition-colors
                            group-hover:bg-primary/10
                        "
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: easeInOut, delay: 0.3 }}
                    >
                        <Icon className="size-8 text-primary" strokeWidth={2.2} />
                    </motion.div>

                    <motion.div
                        className="space-y-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: easeInOut, delay: 0.4 }}
                    >
                        <h3 className="font-semibold group-hover:text-primary text-2xl">{title}</h3>

                        <p className="text-muted-foreground">{description}</p>
                    </motion.div>
                </div>
            </motion.div>
        </Link>
    );
};
