import { RefObject, useEffect, useMemo, useState } from "react";

export default function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.scrollY !== 0) {
        setIsScrolled(true);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return isScrolled;
}
