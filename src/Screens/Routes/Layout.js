// import { Navigate } from 'react-router-dom';


export default function PrivateRoute({ component: Component, ...props }) {
    // const userLogged = JSON.parse(localStorage.getItem('userLogedIn'));

    return /* userLogged ? */ <Component {...props} /> /* : <Navigate to={'/login'} /> */;
}
