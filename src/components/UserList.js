import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {UserListItem} from './UserListItem';


export const UserList = () => {
    const {users} = useContext(GlobalContext)
    return (
        <ul className="list-group mt-3">
            {users.map(user => {
                return <UserListItem user={user} key={user.id}/>
            })}
        </ul>
    )
}
