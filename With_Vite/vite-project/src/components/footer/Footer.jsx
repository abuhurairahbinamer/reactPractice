import React, { useEffect, useState } from 'react';
import style from './footer.module.css'
const Footer = () => {

  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    // Function to check if the content is scrollable
    const checkScrollable = () => {
      setIsScrollable(document.documentElement.scrollHeight > window.innerHeight);
      console.log(document.documentElement.scrollHeight)
    };

    // Check on mount and whenever the window is resized
    checkScrollable();

//for changing the height and width
    window.addEventListener('resize', checkScrollable);






// the below code is when there is chnage in dom  etc





    // Set up a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(checkScrollable);

    // Observe changes in the document body or any of its children
    observer.observe(document.body, {
      childList: true, // Observe direct children changes (added or removed elements)
      subtree: true, // Observe all descendants
      attributes: true, // Observe changes to attributes (in case of CSS changes)
      characterData: true // Observe changes to text content
    });

    // Clean up the observer when component unmounts
    return () =>{ observer.disconnect();
      window.removeEventListener('resize', checkScrollable);

    };
  }, []);

  return (
    <footer className={isScrollable? style.alter: style.foot}>Footer</footer>
  )
}

export default Footer


// Explanation
// MutationObserver Setup:

// MutationObserver is used to watch for changes in the DOM. It monitors modifications to the document's body, including any element being added, removed, or style changes that may impact the height and cause a scrollbar to appear.
// Check Scrollability:

// The checkScrollable function checks if the document height is greater than the viewport height (document.documentElement.scrollHeight > window.innerHeight), indicating that a scrollbar has appeared.
// Initial Check:

// The function is also run once when the component mounts to determine the initial scroll state.
// Clean-up:

// observer.disconnect() is called to stop observing when the component unmounts, ensuring efficient memory use.
// This approach will dynamically add the class to the footer whenever changes in content cause a scrollbar to appear, without depending on the resize event.