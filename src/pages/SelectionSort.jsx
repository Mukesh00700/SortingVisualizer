import React, { useState } from "react";
import "../style.css";
import "../App.css";
import Button from "../components/Button";
import SelectionSortInfo from "../infoPages/SelectionSortInfo";
import { Link } from "react-router-dom";

export default function SelectionSort() {
  const [array, setArray] = useState([29, 10, 14, 37, 13]);
  const [steps, setSteps] = useState([]); // indices being compared
  const [highlightLine, setHighlightLine] = useState(null); // for code highlighting
  const [arraySize, setArraySize] = useState(8);
  const [isSorting, setIsSorting] = useState(false);

  const generateArray = () => {
    const arr = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 50) + 10
    );
    setArray(arr);
    setSteps([]);
    setHighlightLine(null);
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const selectionSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      setHighlightLine(1);
      await sleep(400);

      let minIndex = i;
      setHighlightLine(2);
      setSteps([i]);
      await sleep(400);

      for (let j = i + 1; j < n; j++) {
        setHighlightLine(3);
        setSteps([i, j, minIndex]);
        await sleep(400);

        if (arr[j] < arr[minIndex]) {
          setHighlightLine(4);
          minIndex = j;
          await sleep(400);
        }
      }

      if (minIndex !== i) {
        setHighlightLine(5);
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
        await sleep(600);
      }
    }

    setSteps([]);
    setHighlightLine(null);
    setIsSorting(false);
  };

  return (
    <div className="bg-sub-image">
      <div className="flex">
        {/* Left side - Visualizer */}
        <div className="container mt-20 w-1/2 h-1/2">
          <h2 className="text-4xl text-gray-400 hover:text-white">Selection Sort Visualizer</h2>

          {/* Progress bar */}
          <div className="flex items-center gap-4 mt-4">
            <input
              type="range"
              min="3"
              max="15"
              value={arraySize}
              onChange={(e) => setArraySize(Number(e.target.value))}
              disabled={isSorting}
            />
            <span className="text-white">{arraySize}</span>
          </div>

          {/* Array Bars */}
          <div
            className="array mt-4"
            style={{
              height: "250px",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {array.map((num, idx) => (
              <div
                key={idx}
                className={`bar ${steps.includes(idx) ? "highlight" : ""}`}
                style={{
                  height: `${num * 3}px`,
                  border: "black solid 1px",
                  backgroundColor: steps.includes(idx)
                    ? "yellow"
                    : "steelblue",
                  marginRight: "2px",
                  color: "white",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons mt-6">
            <Button onClick={generateArray} disabled={isSorting} buttonName={"Generate Array"} />
            <Button onClick={selectionSort} disabled={isSorting} buttonName={"Start Selection Sort"} />
          </div>
        </div>

        {/* Right side - Code snippet with glassy finish */}
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
{`for i = 0 to n-1`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor: highlightLine === 2 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
{`   minIndex = i`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor: highlightLine === 3 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
{`   for j = i+1 to n`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor: highlightLine === 4 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
{`      if arr[j] < arr[minIndex]`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor: highlightLine === 5 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
{`   swap arr[i], arr[minIndex]`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Info page */}
      <SelectionSortInfo />

      {/* Back button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className=" text-gray-500 text-2xl gap-2 hover:text-white transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
