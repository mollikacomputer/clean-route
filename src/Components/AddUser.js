import React from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    return (
        <div>
            <h2> Add User</h2>
            <li> <Link to='/updateuser' > update User</Link> </li>
                <li> <Link to='/' > Back to home</Link> </li>
        </div>
    );
};

export default AddUser;