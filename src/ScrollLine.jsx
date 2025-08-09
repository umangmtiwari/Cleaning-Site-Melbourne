import React, { useState, useEffect } from 'react';

const ScrollLine = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    // Calculate the scroll percentage (0 to 1)
    const scrollPercent = currentScroll / maxScroll;
    setScrollPercentage(scrollPercent);

    // Check if header is still visible (header height is about 64px for MUI AppBar)
    const headerHeight = 64;
    if (currentScroll > headerHeight) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: isHeaderVisible ? 'absolute' : 'fixed',  // Change to fixed when scrolling down
        top: isHeaderVisible ? 'auto' : 0,  // If the header is visible, it's at the bottom of AppBar
        bottom: isHeaderVisible ? 0 : 'auto',  // If header is not visible, position it at the top
        left: 0,
        width: `${scrollPercentage * 100}%`,  // Adjust width based on scroll
        height: '8px',
        backgroundColor: '#4CAF50',  // Vibrant Green (vigor-like color)
        transition: 'width 0.1s ease, top 0.3s ease',  // Smooth transition for width and position change
      }}
    />
  );
};

export default ScrollLine;
