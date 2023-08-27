import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar'

const Layout = () => (

    <div className='row'>
        <Navbar/>
        <div className='col-md-3'>
            <Sidebar />
        </div>
        <div className='col-md-9'>
            <Outlet />
        </div>
    </div>

);
export default Layout;