import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Test() {
  const gifRef = useRef(null);

  useEffect(() => {
    const gif = gifRef.current;

    // Create animation with GSAP
    gsap.to(gif, {
      scrollTrigger: {
        trigger: gif,
        start: "top bottom", // Start the animation when the top of the GIF reaches the bottom of the viewport
        end: "bottom top", // End the animation when the bottom of the GIF reaches the top of the viewport
        scrub: true, // Enable scrubbing effect for smooth reversal of the animation on scroll up
        onUpdate: self => {
          // Update the width and height of the GIF based on the scroll position
          const progress = self.progress;
          const newWidth = 100 + (progress * 200); // Example: change width from 100px to 300px
          const newHeight = 100 + (progress * 200); // Example: change height from 100px to 300px
          gsap.set(gif, { width: newWidth, height: newHeight });
        }
      },
      y: 500 // Move the GIF 500 pixels vertically
    });
  }, []);

  return (
    <div className="gif-container">
      <img
        src="https://media.giphy.com/media/3o6Zt6DvfGg1dA7A7S/giphy.gif"
        alt="GIF"
        ref={gifRef}
        style={{ width: "100%", height: "100%" }} // Set initial width and height
      />
    </div>
  );
}

export default Test;
