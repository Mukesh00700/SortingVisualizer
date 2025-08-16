import React, { useState } from "react";
import "../style.css";
import Button from "../components/Button";
import BubbleSortInfo from "../infoPages/BubbleSortInfo";
import { Link } from "react-router-dom";

export default function BubbleSort() {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [arraySize, setArraySize] = useState(7);
  const [isSorting, setIsSorting] = useState(false);
  const [steps, setSteps] = useState([]); // indices being compared
  const [highlightLine, setHighlightLine] = useState(null);

  const generateArray = () => {
    const arr = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 50) + 10
    );
    setArray(arr);
    setSteps([]);
    setHighlightLine(null);
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const bubbleSort = async (arr) => {
    const n = arr.length;
    setHighlightLine(1);
    await sleep(300);

    for (let i = 0; i < n - 1; i++) {
      setHighlightLine(2);
      for (let j = 0; j < n - i - 1; j++) {
        setHighlightLine(3);
        setSteps([j, j + 1]);
        await sleep(300);

        if (arr[j] > arr[j + 1]) {
          setHighlightLine(4);
          // Swap
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await sleep(300);
        }
      }
    }

    setSteps([]);
    setHighlightLine(null);
  };

  const startSort = async () => {
    setIsSorting(true);
    let arrCopy = [...array];
    await bubbleSort(arrCopy);
    setIsSorting(false);
  };

  return (
    <div className="bg-sub-image">
      <div className="flex">
        {/* Left side - Visualizer */}
        <div className="container mt-20 w-1/2 h-1/2">
          <h2 className="text-4xl text-gray-400 hover:text-white">Bubble Sort Visualizer</h2>

          {/* Progress bar */}
          <div className="flex items-center gap-4 mt-4">
            <input
              type="range"
              min="2"
              max="15"
              value={arraySize}
              onChange={(e) => setArraySize(Number(e.target.value))}
              disabled={isSorting}
            />
            <span className="text-white">{arraySize}</span>
          </div>

          {/* Bar graph */}
          <div
            className="array mt-4"
            style={{ height: "250px", display: "flex", alignItems: "flex-end" }}
          >
            {array.map((num, idx) => (
              <div
                key={idx}
                className={`bar ${steps.includes(idx) ? "highlight" : ""}`}
                style={{
                  height: `${num * 3}px`,
                  border: `black solid 1px`,
                  marginRight: idx === steps[0] ? "5px" : "2px",
                  backgroundColor: steps.includes(idx) ? "red" : undefined, // teal color as in old algos
                }}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons mt-6 flex gap-4">
            <Button onClick={generateArray} disabled={isSorting} buttonName={"Generate Array"} />
            <Button onClick={startSort} disabled={isSorting} buttonName={"Start Bubble Sort"} />
          </div>
        </div>

        {/* Right side - Code Panel */}
        <div className="flex-1 p-4 mt-20">
          <div
            className="bg-gray-900 bg-opacity-60 backdrop-blur-md text-white p-4 rounded-lg overflow-auto h-full"
            style={{ fontFamily: "monospace" }}
          >
            <pre>
              <code
                style={{
                  backgroundColor: highlightLine === 1 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`function bubbleSort(arr) {`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor: highlightLine === 2 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`  for(let i = 0; i < arr.length-1; i++) {`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor: highlightLine === 3 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    for(let j = 0; j < arr.length-i-1; j++) {`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor: highlightLine === 4 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`      if(arr[j] > arr[j+1]) { swap(arr[j], arr[j+1]); }`}
              </code>
              {"\n"}
              <code>{`    }`}</code>
              {"\n"}
              <code>{`  }`}</code>
              {"\n"}
              <code>{`}`}</code>
            </pre>
          </div>
        </div>
      </div>
      <BubbleSortInfo />
      <div className="mt-8 text-center">
              <Link to="/" className=" text-gray-500 text-2xl gap-2 hover:text-white transition">
                ← Back to Home
              </Link>
            </div>
    </div>
  );
}
