import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from '../router/Routes'

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    path={route.path}
                    element={route.component}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
    );
};

export default AppRouter;