import React, { useContext, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const Add = () => {
    const [state, setState] = useState('');
    const {addUser} = useContext(GlobalContext);
    const history = useHistory('/');

    return (
        <div>
            <h1>Add user</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" placeholder="type text..." onChange={(e) => setState(e.target.value)} value={state}></input>
                    <div className="d-flex justify-content-between mt-3" style={{width: "140px"}}>
                        <button type="button" className="btn btn-success" 
                        onClick={() => {
                            addUser(state);
                            setState('');
                            history.push('/');
                            }
                            }>Add</button>
                        <Link type="button" className="btn btn-danger" to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
