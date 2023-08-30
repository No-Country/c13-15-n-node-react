import { AuthContext } from './AuthContext'
import React, { useReducer } from 'react'

const type = {
    login: '[Auth] Login',
    logout: '[Auth] Logout'
}

const authReducer = (state = {}, action ) =>{
    switch (action.type){
        case type.login:
            return {
                ...state,
                logged: true
            }
        case type.logout:
            return {
                ...state,
                logged: false
            }
        default:
            return state
    }
}

const AuthProvider = ({children}) =>{
    const init = () => {
        const token = localStorage.getItem('token')
        return {
            //si es que hay un token lo vuelve un boleano
            logged: !!token
        }
    }

    const [state, dispatch] = useReducer(authReducer, {}, init)
    const login = () =>{
        const action = {
            type: type.login
        }
        dispatch(action)
    }

    const logout = ()=> {
        localStorage.removeItem('token')
        const action = {
            type: type.logout
        }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={
            {
            login, logout, 
            ...state
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}











