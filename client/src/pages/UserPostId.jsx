import React from 'react';
import {useParams} from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import Header from '../components/Header';
import CardList from '../components/CardList'
import PostsList from '../components/PostsList';
import Footer from '../components/Footer';

const UserPostId = () => {
    const params = useParams()
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState({name: '', surname: '', id: ''})

    async function fetchData() {
        setIsLoading(true)
        const responseUser = await PostService.getUserById(params.id);
        setUser({...responseUser.data})
        setIsLoading(false)
    }

    React.useEffect(() => {
        fetchData();
    }, [])



    return (
        isLoading
            ? <Loader/>
            : <div className='main-container'>
                <Header>{user.name}</Header>
                <PostsList id={params.id} />
                <Footer/>
            </div>
    );
};

export default UserPostId;