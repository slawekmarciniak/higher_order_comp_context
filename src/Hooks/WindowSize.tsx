import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [{ width }, setSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSize]);

  return { width };
};

export default useWindowSize;
