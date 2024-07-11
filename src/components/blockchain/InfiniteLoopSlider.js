import React from 'react';
import style from '@/styles/Languages.module.css';

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <>
      <div className={style.loopslider}
        style={{
          '--duration': `${duration}ms`,
          '--direction': reverse ? 'reverse' : 'normal'
        }}
      >
        <span className={style.inner}>
          {children}
          {children}
        </span>
      </div>
    </>
  );
};

export default InfiniteLoopSlider;

