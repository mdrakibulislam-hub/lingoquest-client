import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (user) {
        return children;
    }
    else
        return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;