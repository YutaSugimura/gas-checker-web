import { useEffect, useState } from "react";

export const useMounted = () => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    setState(true);
  }, []);

  return {
    hasMounted: state,
  };
};
