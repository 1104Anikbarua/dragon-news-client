import React from 'react';
import { useContext } from 'react';
import { NewsContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const RequireAuth = ({ children }) => {

    const { user, loading } = useContext(NewsContext);
    console.log(user)
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;