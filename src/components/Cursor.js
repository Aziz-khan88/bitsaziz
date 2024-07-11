import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const moveCursor = document.querySelector('.cursor');
    const body = document.querySelector('body');

    const handleMouseMove = (e) => {
      const X = e.clientX;
      const Y = e.clientY;
      moveCursor.style.left = X + 'px';
      moveCursor.style.top = Y + 'px';
    };

    const handleMouseOver = () => {
      moveCursor.classList.add('cursorActive');
    };

    const handleMouseOut = () => {
      moveCursor.classList.remove('cursorActive');
    };

    if (body) {
      body.addEventListener('mousemove', handleMouseMove);
      body.addEventListener('mouseover', handleMouseOver);
      body.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (body) {
        body.removeEventListener('mousemove', handleMouseMove);
        body.removeEventListener('mouseover', handleMouseOver);
        body.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);

  return (
    <div className="cursor"></div>
  );
};

export default Cursor;