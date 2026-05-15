import { easeInOut, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AiThinkingProps {
    text?: string;
}

export const AiThinking = ({ text = 'Pensando' }: AiThinkingProps) => {
    return (
        <motion.div
            className="flex items-center justify-center gap-3 py-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 1.5, repeat: Infinity, ease: easeInOut },
                }}
            >
                <Sparkles className="size-8 text-primary"  strokeWidth={1.5}/>
            </motion.div>

            <motion.span
                className="bg-linear-to-r from-primary via-muted-foreground to-primary bg-size-[200%_100%] bg-clip-text text-2xl font-semibold text-transparent"
                animate={{
                    backgroundPosition: ['200% 0%', '-200% 0%'],
                }}
                transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {text}
            </motion.span>

            <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="size-2 rounded-full bg-primary"
                        animate={{
                            scale: [1, 1.6, 1],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: easeInOut,
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};
