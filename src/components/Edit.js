import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import {useParams, useHistory, Link} from 'react-router-dom';

export const Edit = () => {
    const {users, editUser} = useContext(GlobalContext);
    const {id} = useParams();
    const editableUser = users.find(user => user.id === id);
    const [state, setState] = useState(editableUser.name);
    const history = useHistory();
    return (
        <div>
            <h1>Edit user</h1>
            <form>
                <div className="form-group">
                    <label>Edit this name</label>
                    <input className="form-control" type="text" placeholder="type text..." onChange={(e) => setState(e.target.value)} value={state}></input>
                    <div className="d-flex justify-content-between mt-3" style={{width: "140px"}}>
                        <button type="button" className="btn btn-warning" 
                        onClick={() => {
                            editUser({id:id, name:state});
                            history.push('/');
                            }
                            }>Edit</button>
                        <Link type="button" className="btn btn-danger" to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
