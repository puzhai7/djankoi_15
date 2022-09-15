import React from 'react';
import {useNavigate} from 'react-router-dom'
import Button from './UI/Button/Button';

const UserCard = ({user}) => {
    const route = useNavigate()
    return (
        <div className='glass shadow card'>
            <h2>{user.name}</h2>
            <p>{user.surname}</p>
            <Button onClick={() => route(`/user/${user.id}`)}>п о с т ы</Button>
        </div>
    );
};

export default UserCard;