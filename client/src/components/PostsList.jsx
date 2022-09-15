import React from 'react';
import PostCard from './PostCard';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader'

const PostsList = ({id}) => {
    const [posts, setPosts] = React.useState([])
    const [emptyPost, setEmptyPost] = React.useState([{id: "1", title: "ПОСТОВ", content: "НЕТ"}])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const response = await PostService.getPostsByUser(id);
            setPosts(() => [...posts, ...response.data])
            setIsLoading(false)
        }
        fetchData();
    }, [])
    

    return (
        <div className='card-list'>
            {isLoading
                ? <Loader />
                : posts.length === 0
                    ? emptyPost.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))
                    : posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))
            }
        </div>
    );
};

export default PostsList;