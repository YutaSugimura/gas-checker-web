import { useCurrentGasPrice } from "../../hooks/gasPrice";

export const CurrentPrice: React.VFC = () => {
  const { current } = useCurrentGasPrice();

  if (!current) {
    return <p>loading...</p>;
  }

  const {
    blockNumber,
    fastGasPrice,
    proposeGasPrice,
    safeGasPrice,
    suggestBaseFee,
    timestamp,
  } = current;

  return (
    <div>
      <p>current price</p>

      <div>
        <p>blockNumber: {blockNumber}</p>
        <p>fastGasPrice: {fastGasPrice}</p>
        <p>proposeGasPrice: {proposeGasPrice}</p>
        <p>safeGasPrice: {safeGasPrice}</p>
        <p>suggestBaseFee: {suggestBaseFee}</p>
        <p>timestamp: {timestamp.seconds}</p>
      </div>
    </div>
  );
};
