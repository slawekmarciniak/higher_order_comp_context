import { useState, useEffect } from "react";

const maxMobileSize: number = 1023;
const useWindowSize = () => {
  const [{ isMobileSize }, setSize] = useState({
    isMobileSize: window.innerWidth > maxMobileSize ? false : true,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        isMobileSize: window.innerWidth > maxMobileSize ? false : true,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSize]);

  return { isMobileSize };
};

export default useWindowSize;
