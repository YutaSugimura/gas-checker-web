import { createContext, useContext, useEffect, useState } from "react";
import type { FirebaseApp } from "firebase/app";
import { useMounted } from "../hooks/hasMounted";
import { setupFirebase } from "../modules/firebase";

const StateContext = createContext<null | FirebaseApp>(null);

type Props = {
  children: React.ReactChild;
};

export const FirebaseContext: React.VFC<Props> = ({ children }) => {
  const [state, setState] = useState<null | FirebaseApp>(null);
  const hasMounted = useMounted();

  useEffect(() => {
    if (hasMounted) {
      const firebase = setupFirebase();
      setState(firebase);
    }
  }, [hasMounted]);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export const useFirebase = () => useContext(StateContext);
