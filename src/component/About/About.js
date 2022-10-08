import React from 'react';
import { useLoaderData } from 'react-router-dom';
 

const About = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
        <div>
              {
                posts.map(post=><h1>{post.title}</h1>)
              }
            <h1>This is about Component </h1>
        </div>
    );
};

export default About;