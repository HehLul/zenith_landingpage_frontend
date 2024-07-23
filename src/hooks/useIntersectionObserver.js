// src/hooks/useIntersectionObserver.js
import { useEffect } from "react";

const useIntersectionObserver = (elements, options, callback) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [elements, options, callback]);
};

export default useIntersectionObserver;
