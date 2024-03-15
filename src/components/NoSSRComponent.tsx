import React, { useState, useEffect } from 'react';

const NoSSRComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update state with the current window width
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width and add event listener for resizing
    updateWidth();
    window.addEventListener('resize', updateWidth);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default NoSSRComponent;
