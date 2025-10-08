import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0.7
        }

        observer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting) {
                console.log('intersected');
                callback();
            }
        }, options)

        observer.current.observe(childRef.current);

        return function () {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [callback])
};