import React from 'react';
import {v4 as uuidv4} from 'uuid';

export const AppReducer = (state, action) => {
    console.log('here');
    console.log(action);
    console.log(state)
    switch(action.type) {
        case "ADD_USER":
            return {
                ...state, users: [...state.users, action.payload]
            }
        default: return state;
    }
}