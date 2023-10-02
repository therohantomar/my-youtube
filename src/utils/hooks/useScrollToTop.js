import { useEffect } from "react";

function useScrollToTop() {
  let isScrolling = true;
  useEffect(() => {
    function ScrollToTop() {
      if (!isScrolling) return;
      window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
      if (isScrolling) {
        window.requestAnimationFrame(ScrollToTop);
      }
    }

    ScrollToTop();

    return () => {
      isScrolling = false;
    };
  }, []);
}

export default useScrollToTop;
