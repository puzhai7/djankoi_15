import React from 'react';

const PostCard = ({post}) => {
    return (
        <div className='glass card shadow'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export default PostCard;