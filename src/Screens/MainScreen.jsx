import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
const routeSources = [
    {
        path: '/',
        component: lazy(() => import('./ContentScreen'))
    },
    {
        path: '/pointsTable',
        component: lazy(() => import('./Pointstable/index.jsx'))
    },
   
];
const DisplayHomeContent = () => {
    return (
        <div>
            <Routes>
                {routeSources.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
                <Route path={'*'} element={<div>No Page found!!</div>} />
            </Routes>
        </div>
    )
}
export default DisplayHomeContent