import React from 'react';
import {Link} from 'react-router-dom';

export const Heading = () => {
    return (
        <div className="nav border rounded d-flex justify-content-between p-3 bg-dark">
            <h2 className="text-light">User App</h2>
            <div className="nav-item d-flex align-items-center">
                <Link to="/add"className="btn btn-primary">Add new user</Link>
            </div>
        </div>
    )
}
