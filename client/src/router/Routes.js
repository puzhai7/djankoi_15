import About from '../pages/About';
import UserPostId from '../pages/UserPostId';

export const publicRoutes = [
    {path: '/user', component: <About/>, exact: true},
    {path: '/user/:id', component: <UserPostId/>, exact: true},
]