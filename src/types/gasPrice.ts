export type CurrentGasPrice = {
  blockNumber: number;
  eip155: string;
  fastGasPrice: string;
  proposeGasPrice: string;
  safeGasPrice: string;
  suggestBaseFee: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
};
