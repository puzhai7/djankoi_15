import React from 'react';
import PostService from '../API/PostService'

const UserPosts = () => {
    const [isLoading, setIsLoading] = React.useState([])
    async function fetchData() {
        setIsLoading(true)
        const response = await PostService.getPostsByUser();
        setIsLoading(false)
    }
    fetchData();

    return (
        <div className='main-container'>
            
        </div>
    );
};

export default UserPosts;