import { useRoutes, Navigate } from 'react-router-dom';

import Welcome from '../Pages/Welcome';
import DashboardLayout from "../Layout/index";
import Dashboard from '../Components/Dashboard/Dashboard';
import Tools from '../Components/Tools/Tools';
import Resources from '../Components/Resources/Resources';
import OurTeam from '../Components/OurTeam/OurTeam';

const Router = () => {

    const startFlag = localStorage.getItem('start') === 'true';

    return useRoutes([
        {
            path: '/',
            element: startFlag ? <Navigate to="/PathwayAdvice" /> : <Welcome />
        },
        {
            path: '/PathwayAdvice',
            element: startFlag ? <DashboardLayout /> : <Navigate to="/" />,
            children: [
                { path: "/PathwayAdvice", element: <Dashboard /> },
                { path: "/PathwayAdvice/tools", element: <Tools /> },
                { path: "/PathwayAdvice/resources", element: <Resources /> },
                { path: "/PathwayAdvice/our-team", element: <OurTeam /> },
            ]
        },
        {
            path: '*',
            element: <h1>Page Not Found</h1>
        },
    ])
}

export default Router;