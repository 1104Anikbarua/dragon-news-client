import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer } from 'react-toastify';

const Auth = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
        </div>
    );
};

export default Auth;