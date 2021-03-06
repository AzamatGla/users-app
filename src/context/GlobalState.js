import React, { createContext, useReducer } from 'react';
import {AppReducer} from './AppReducer';
import {v4 as uuidv4} from 'uuid';

const InitialState = {
    users: [
        {id: "1", name: 'User One'},
        {id: "2", name: 'User Two'},
        {id: "3", name: 'User Three'}
    ]
};

export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    const addUser = (nameOfNewUser) => {
        dispatch({
            type: "ADD_USER",
            payload: {
                id: uuidv4(),
                name: nameOfNewUser}
        });
    };

    const deleteUser = (id) => {
        console.log('delete')
        dispatch({
            type: "DELETE_USER",
            payload: id
        });
    };

    const editUser = (newObjectToEdit) => {
        dispatch({
            type: "EDIT_USER",
            payload: newObjectToEdit
        })
    }

    return (
        <GlobalContext.Provider value={{users: state.users, addUser, deleteUser, editUser}}>
            {children}
        </GlobalContext.Provider>
    )
}