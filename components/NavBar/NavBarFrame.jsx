import { useRef, useState, useEffect } from "react";

function NewNav({ children, sticky = false }) {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef();

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        {
          threshold: [1],
        }
      );

    observer.observe(cachedRef);

    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <div className={isSticky ? "isSticky" : ""} ref={ref}>
      {children}
    </div>
  );
}

export default NewNav;
