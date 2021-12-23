import { useEffect, useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { CurrentGasPrice } from "../types/gasPrice";

export const useCurrentGasPrice = () => {
  const [state, setState] = useState<CurrentGasPrice | undefined>();

  useEffect(() => {
    const db = getFirestore();

    const unsub = onSnapshot(doc(db, "GasPrice", "ethereum"), (doc) => {
      if (doc.exists()) {
        const data = doc.data() as CurrentGasPrice;
        setState(data);
      }
    });

    return () => unsub();
  }, []);

  return {
    current: state,
  };
};
