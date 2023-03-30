import Stock from "./Stock";

export default function ListStocks({ name, symbol, change, lastPrice }) {
  return (
    <Stock name={name} symbol={symbol} lastPrice={lastPrice} change={change} />
  );
}
