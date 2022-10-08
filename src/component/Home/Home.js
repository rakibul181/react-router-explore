import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Home.css'
 

const Home = () => {
    const users = useLoaderData()
    // console.log(users)
    return (
        <div>
           <p>There are {users.length} user</p>
           <div className='users'>
           {
            users.map((user, idx)=><User key={idx} user={user}></User>)
           }
           </div>
            This is Home Component 
            Every This is real Home
        </div>
        
    );
};

export default Home;