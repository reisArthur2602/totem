import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '../components/app-shell';

import { CheckInConfirm } from './app/check-in/confirm';
import { CheckInCpf } from './app/check-in/cpf';
import { CheckInSuccess } from './app/check-in/success';

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<AppShell />}>
                    {/* <Route index element={<CheckIn />} /> */}
                    <Route path="cpf" index element={<CheckInCpf />} />
                    <Route path="confirmar/:cpf" element={<CheckInConfirm />} />
                    <Route path="sucesso" element={<CheckInSuccess />} />
                </Route>

                <Route path="*" element={<Navigate to="/app/cpf" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
