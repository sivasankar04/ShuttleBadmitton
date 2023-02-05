
import { Outlet } from "react-router-dom"
import PointsTable from 'Screens/Pointstable.jsx';

const Layout = () => {
    return (
        <main className="App">
            <h1 className="text-3xl text-red-500 font-bold ">
                Hello world!
            </h1>
            {/* <PointsTable/> */}
         
            <Outlet />
        </main>
    )
}

export default Layout
