import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';



const Auth = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>


        </div>
    );
};

export default Auth;