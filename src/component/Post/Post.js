import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Post = () => {
    const post =useLoaderData()
    return (
        <div>
            <h1>This is Single Post :{JSON.stringify(post)}</h1>
        </div>
    );
};

export default Post;