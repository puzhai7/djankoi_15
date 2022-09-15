import React from 'react';
import UserCard from './UserCard';
import PostService from '../API/PostService'
import Loader from './UI/Loader/Loader';

const CardList = () => {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const response = await PostService.getAllUsers();
            setUsers([...users, ...response.data])
            setIsLoading(false)
        }
        fetchData();
    }, [])

    return (
        <div className='card-list'>
            {isLoading
                ? <Loader />
                : users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))
            }
        </div>
    );
};

export default CardList;