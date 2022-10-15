import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [initialPrice, setInitialPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [message, setMessage] = useState("");

  const clickHandler = () => {
    let totalCurrentPrice = currentPrice * quantity;
    let totalInitialPrice = initialPrice * quantity;
    let profitLoss = totalCurrentPrice - totalInitialPrice;
    if (initialPrice < 0 || quantity < 0) {
      setMessage(`Initial price or quantity of stocks cannot be negative!`);
    } else if (quantity === 0) {
      setMessage(`Enter valid quantity of stocks`);
    } else if (profitLoss > 0) {
      setMessage(
        `Congratulations! the profit is ${profitLoss} and the profit percentage is ${
          profitLoss / 100
        }%`
      );
    } else if (profitLoss === 0) {
      setMessage(`There is no profit or loss!`);
    } else {
      setMessage(
        `Sorry, the loss is ${profitLoss} and the loss percentage is ${
          profitLoss / 100
        }%`
      );
    }
  };

  return (
    <div className="App">
      <h1>Stock Profile & Loss Calculator</h1>
      <div className="container">
        <div className="sub-container">
          <label>Initial Price</label>
          <input
            type="number"
            placeholder="Enter initial price"
            value={initialPrice}
            onChange={(e) => setInitialPrice(e.target.value)}
          />
          <label>Quantity of Stocks</label>
          <input
            type="number"
            placeholder="Enter quantity of stocks"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label>Current Price</label>
          <input
            type="number"
            placeholder="Enter current price"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
          />
          <button onClick={clickHandler}>Submit</button>
        </div>
        <h2>{message}</h2>
      </div>
    </div>
  );
}
