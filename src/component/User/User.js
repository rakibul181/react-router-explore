import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    return (
        <div className='user'>
             <h2>Name: {user.name}</h2>
             <h3>Email : {user.email}</h3>
             <p>Username: <Link to={`/user/${user.id}`}>{user.username}</Link></p>

        </div>
    );
};

export default User;