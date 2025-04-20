// src/hooks/scroll.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // biar render section-nya sempat dulu
      }
    }
  }, [location]);
};

export default useScrollToHash;
