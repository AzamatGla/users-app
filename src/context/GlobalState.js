import React, { createContext, useReducer } from 'react';
import {AppReducer} from './AppReducer';

const InitialState = {
    users: [
        {id: 1, name: 'User One'},
        {id: 2, name: 'User Two'},
        {id: 3, name: 'User Three'}
    ]
};

export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);
    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}