import { useEffect, useState } from "react";

export default function CoinApp() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}: {coin.quotes.USD.price}) {"\t\t\t\t"}
              {amount / coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <input
        type="text"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
    </div>
  );
}
