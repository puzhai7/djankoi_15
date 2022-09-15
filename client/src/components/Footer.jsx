import React from 'react';
import Button from './UI/Button/Button';
import {useNavigate} from 'react-router-dom'

const Footer = () => {
    const route = useNavigate()
    return (
        <div className='footer'>
            <Button onClick={() => route('/user')}>н а з а д</Button>
        </div>
    );
};

export default Footer;