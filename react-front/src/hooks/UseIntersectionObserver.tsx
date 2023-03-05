import { useEffect, useState, RefObject, useMemo } from "react";

export default function useIntersectionObserver(elementRef: RefObject<HTMLElement>){
    const [isIntersecting, setIsIntersecting] = useState(false);

    
  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIsIntersecting(entry.isIntersecting)
  ),[] ) 

    useEffect(() => {
        observer.observe(elementRef.current)
        return () => observer.disconnect()
    },[elementRef])

     return isIntersecting;
}
