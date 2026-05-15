import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from './providers';

import RoutesApp from './routes/app.routes';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Providers>
            <RoutesApp />
        </Providers>
    </StrictMode>
);
