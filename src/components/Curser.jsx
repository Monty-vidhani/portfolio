import React, { useEffect, useRef } from "react";

const Curser = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
        cursorRef.current.style.opacity = "1";
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div ref={cursorRef} className="h-[0.8rem] w-[0.8rem] rounded-4xl ease-linear delay-5 z-9999  bg-yellow-400  fixed"></div>;
};

export default Curser;
