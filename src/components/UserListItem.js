import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const UserListItem = ({user}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {user.name}
            <div className="buttons d-flex justify-content-between" style={{width:"130px"}}>
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger ml-1">Delete</button>
            </div>
        </li>
    )
}
