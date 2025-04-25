import { useEffect, useState } from "react";

export function useMediaWidth() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    // Run only on the client
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
