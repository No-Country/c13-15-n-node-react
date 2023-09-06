import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

export const PrivateRouter = ({ children }) => {
    const {logged} = useContext(AuthContext)
    return (logged) ?
        children
        : <Navigate to='/acceso' />
}
