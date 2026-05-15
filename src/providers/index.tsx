import type { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import { ReactQueryProvider } from './react-query';

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ReactQueryProvider>
            <Toaster
                toastOptions={{
                    style: {
                        fontSize: '16px',
                        padding: '16px',
                        backgroundColor: '#14131a',
                        color: '#e4e4e7',
                        borderRadius: '12px',
                    },
                    success: {
                        style: {
                            backgroundColor: '#10b981',
                        },
                    },
                    error: {
                        style: {
                            backgroundColor: '#ef4444',
                        },
                    },
                }}
            />
            {children}
        </ReactQueryProvider>
    );
};
