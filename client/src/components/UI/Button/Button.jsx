import React from 'react';
import cls from './Button.module.css'

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={cls.btn}>
            {children}
        </button>
    );
};

export default Button;