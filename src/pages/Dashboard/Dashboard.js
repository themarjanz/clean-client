import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar';


const Dashboard = () => {
    return (
        <DashboardSidebar>
            {/* <h1 className='text-2xl text-center'>Welcome to dashboard</h1> */}
            <Outlet />
        </DashboardSidebar>
    );
};

export default Dashboard;