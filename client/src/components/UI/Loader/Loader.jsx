import React from 'react';
import cls from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cls.rotate}>
            <div className={cls.move}>
                <div className={cls.dot}></div>
            </div>
            <div className={cls.ring}></div>
        </div>
    );
};

export default Loader;