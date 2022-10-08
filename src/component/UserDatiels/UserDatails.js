import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDatails = () => {
    const user = useLoaderData()
    const userSrt = JSON.stringify(user)
    return (
        <div>
            <h3>{userSrt}</h3>
            <h1>Everthin you can get about its user</h1>
        </div>
    );
};

export default UserDatails;