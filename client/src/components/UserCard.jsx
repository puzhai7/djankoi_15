import React from 'react';
import Button from './UI/Button/Button';

const UserCard = ({user}) => {
    return (
        <div className='glass shadow card'>
            <h2>{user.name}</h2>
            <p>{user.surname}</p>
            <Button>п о с т ы</Button>
        </div>
    );
};

export default UserCard;