import { useState, useEffect } from "react";

const useWindowSize = (maxMobileSize: number) => {
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
