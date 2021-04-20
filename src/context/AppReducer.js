import React from 'react';

export const AppReducer = (state, action) => {
    switch(action.type) {
        case "ADD_USER":
            return {
                ...state, users: [...state.users, action.payload]
            };
        case "DELETE_USER":
            return {
                ...state, users: state.users.filter(item => item.id !== action.payload)
            };
        case "EDIT_USER":
            return {
                ...state, users: state.users.map(item => {
                    if (item.id === action.payload.id) {
                        item.name = action.payload.name;
                    }
                    return item;
                })
            }
        default: return state;
    }
}