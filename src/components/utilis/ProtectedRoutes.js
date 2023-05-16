import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoutes(children) {
    const isAuthenticated = JSON.parse(localStorage.getItem('user-info'));
    if (!isAuthenticated){
        return <Navigate to='/login' replace />
    }

    return children.children
}

export default ProtectedRoutes