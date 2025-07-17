import Post from '../post/Post';
import "./posts.scss";
import React from 'react';

const Posts =()=>{

    
            const posts= [
            {
            id:1,
            name:"John Verma",
            userId:1,
            profilePic:"person.jpeg",
            desc:" lorem ispum dolor sit amet consectectur adipisicing elit"
        },
        {
            id:2,
            name:"John Verma",
            userId:1,
            image:"person.jpeg",
             desc:" lorem ispum dolor sit amet consectectur adipisicing elit"

        }
            ];
    return(
        <div className='posts'>
            {posts.map(post =>(
                <Post post={post} key={post.id} />
            ))}

        </div>
    )
}   

export default Posts;