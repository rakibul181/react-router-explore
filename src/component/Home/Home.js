import React from 'react';
import { useLoaderData } from 'react-router-dom';
 

const Home = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
           <p>There are {users.length} user</p>
           {
            users.map((user,idx)=><h2>{idx+1}: {user.name}</h2>)
           }
            This is Home Component 
            Every This is real Home
        </div>
        
    );
};

export default Home;