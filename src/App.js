import './App.css';
import RegisterScreen from './Screens/Register';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Screens/Routes/Layout';
import LoginScreen from './Screens/login';
import UnauthorizedScreen from './Screens/UnauthorizedScreen';
import MissingScreen from './Screens/MissingScreen';
import RequireAuth from './Screens/RequireAuth';
import Admin from './Screens/Admin';
import Players from './Screens/Players';
import Visitors from './Screens/Visitors';

function App() {
  const Public = () => <div>public</div>;
  const Private = () => <div>private</div>;
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* PUBLICROUTES */}
          {/* <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="unauthorized" element={<UnauthorizedScreen />} />
          <Route path="*" element={<MissingScreen />} /> */}
          {/* ProtectedRoutes */}

          {/* <Route element={<RequireAuth />}>
            <Route path={'admin'} element={<Admin />} />
            <Route path={'players'} element={<Players />} />
            <Route path={'visitors'} element={<Visitors />} />
          </Route> */}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
