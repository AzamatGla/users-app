import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Link} from 'react-router-dom';

export const UserListItem = ({user}) => {
    const {deleteUser} = useContext(GlobalContext);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {user.name}
            <div className="buttons d-flex justify-content-between" style={{width:"130px"}}>
                <Link to={`/edit/${user.id}`} className="btn btn-warning">Edit</Link>
                <button className="btn btn-danger ml-1" onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
        </li>
    )
}
