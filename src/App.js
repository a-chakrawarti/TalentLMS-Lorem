import React, { useState } from "react";
import "./App.css";
import text from "./components/data";
import Paragraph from "./components/Paragraph";

function App() {
  const textData = text;
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    const { value } = event.target;
    setCount(value);
    // console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = Number(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 9) {
      amount = 9;
    }
    const newTextData = textData.slice(0, amount);
    setData(newTextData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Paragraphs</label>
        <input type="number" value={count} onChange={handleChange} />
        <button type="submit">GENERATE</button>
      </form>
      {data.map((item, index) => {
        return <Paragraph key={index} item={item} />;
      })}
    </>
  );
}

export default App;
