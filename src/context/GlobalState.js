import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial State
const initialState = {
    users: []
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);
    
    //Actions
    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    
    return (
        <GlobalContext.Provider value={{ 
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            { children }
        </GlobalContext.Provider>
    )
}