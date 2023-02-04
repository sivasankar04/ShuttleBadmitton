import logo from './logo.svg';
import './App.css';
import LoginScreen from './Screens/login';
import RegisterScreen from './Screens/Register';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
  return true ? children : <Navigate to="/login" />;
}
const PublicRoute = ({ children }) => {
  return false ? children : <Navigate to="/login" />;
}
function App() {
  const Public = () => <div>public</div>;
  const Private = () => <div>private</div>;
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Public />} />
          <Route
            path="/private"
            element={
              <PrivateRoute>
               <RegisterScreen />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <RegisterScreen /> */}
    </div>
  );
}

export default App;
