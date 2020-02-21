import { useState, useEffect } from 'react';

const useScrollHandler = () => {
  // setting initial value to true
  const [scroll, setScroll] = useState(1);

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 10;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    // setting the event handler from web API
    document.addEventListener('scroll', onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

export default useScrollHandler;
/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useRef } from 'react';
// import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

// const isBrowser = typeof window !== `undefined`;

// function getScrollPosition({ element, useWindow }) {
//   if (!isBrowser) return { x: 0, y: 0 };

//   const target = element ? element.current : document.body;
//   const position = target.getBoundingClientRect();

//   return useWindow
//     ? { x: window.scrollX, y: window.scrollY }
//     : { x: position.left, y: position.top };
// }

// export function useScrollPosition(effect, deps, element, useWindow, wait) {
//   const position = useRef(getScrollPosition({ useWindow }));

//   let throttleTimeout = null;

//   const callBack = () => {
//     const currPos = getScrollPosition({ element, useWindow });
//     effect({ prevPos: position.current, currPos });
//     position.current = currPos;
//     throttleTimeout = null;
//   };

//   useIsomorphicLayoutEffect(() => {
//     if (!isBrowser) {
//       return;
//     }

//     const handleScroll = () => {
//       if (wait) {
//         if (throttleTimeout === null) {
//           throttleTimeout = setTimeout(callBack, wait);
//         }
//       } else {
//         callBack();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, deps);
// }

// useScrollPosition.defaultProps = {
//   deps: [],
//   element: false,
//   useWindow: false,
//   wait: null,
// };

// export default useScrollPosition;
