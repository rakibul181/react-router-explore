import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
             {
                posts.map(post=><Link to={`/post/${post.id}`}><h3>{post.id}</h3></Link>)
             }
         <h2>This is posts</h2>
        </div>
    );
};

export default Posts;