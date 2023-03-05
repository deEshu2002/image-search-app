import { RefObject, useEffect, useMemo, useState } from "react"

export default function useOnScreen(ref: RefObject<HTMLElement>) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  if(ref) {
    useEffect(() => {
      observer.observe(ref?.current as HTMLElement)
      console.log(isIntersecting);
      return () => observer.disconnect()
    }, [])
  }
    
  return isIntersecting;
}