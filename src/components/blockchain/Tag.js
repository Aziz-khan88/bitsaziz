import React from 'react';
import style from '@/styles/Languages.module.css';

const Tag = ({ text }) => (
    <>
        <div className={style.tag}><span>#</span> {text}</div>
    </>
);

export default Tag
