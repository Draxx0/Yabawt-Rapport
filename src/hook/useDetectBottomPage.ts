import { useEffect, useState } from "react";

const useDetectBottomPage = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > document.body.scrollHeight - 2000) {
        setIsDisplay(true);
        return;
      }
      setIsDisplay(false);
    });
  };
  useEffect(() => {
    handleScroll();
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return isDisplay;
};

export default useDetectBottomPage;
