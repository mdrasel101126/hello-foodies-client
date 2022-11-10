import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - HelloFoodies`;
  }, [title]);
};

export default useTitle;
