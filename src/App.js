import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'Screens/Routes/Layout';
import {Suspense,lazy} from 'react'
function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* <Route path={'/login'} element={<PublicRoute component={lazy(() => import('./Screens/login'))} />} /> */}
              <Route
                path={'/*'}
                element={<PrivateRoute component={lazy(() => import('./Screens/LayoutScreen'))} />}
              />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Suspense>
  );
}

export default App;
