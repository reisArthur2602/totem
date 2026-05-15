import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '../components/app-shell';

import { CheckInCPF } from './app/check-in/cpf';

import { CheckIn } from './app/check-in';

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<AppShell />}>
                    <Route index element={<CheckIn />} />
                    <Route path="cpf" element={<CheckInCPF />} />
                </Route>

                <Route path="*" element={<Navigate to="/app" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
