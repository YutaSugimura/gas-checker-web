import { useFirebase } from "../../context/firebase";
import { CurrentPrice } from "./currentPrice";

export const GasPrice: React.VFC = () => {
  const firebase = useFirebase();

  if (!firebase) {
    return <div>loading...</div>;
  }

  return <CurrentPrice />;
};
