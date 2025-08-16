import React, { useState } from "react";
import "../style.css";
import "../App.css";
import Button from "../components/Button";
import InsertionSortInfo from "../infoPages/InsertionSortInfo";
import { Link } from "react-router-dom";

export default function InsertionSort() {
  const [array, setArray] = useState([50, 20, 40, 10, 30]);
  const [highlightLine, setHighlightLine] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(null);
  const [arraySize, setArraySize] = useState(8);
  const [isSorting, setIsSorting] = useState(false);

  const generateArray = () => {
    if (isSorting) return;
    const arr = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 50) + 10
    );
    setArray(arr);
    setHighlightLine(null);
    setHighlightIndex(null);
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const insertionSort = async (arr) => {
    for (let i = 1; i < arr.length; i++) {
      setHighlightLine(1); // outer loop
      await sleep(300);

      let key = arr[i];
      setHighlightIndex(i);
      setHighlightLine(2); // key assignment
      await sleep(400);

      let j = i - 1;
      setHighlightLine(3); // while condition
      await sleep(500);

      while (j >= 0 && arr[j] > key) {
        setHighlightIndex(j);
        setHighlightLine(4); // shifting
        arr[j + 1] = arr[j];
        j = j - 1;
        setArray([...arr]);
        await sleep(500);
      }

      setHighlightLine(5); // insert key
      arr[j + 1] = key;
      setArray([...arr]);
      await sleep(400);
    }
  };

  const startSort = async () => {
    setIsSorting(true);
    let arrCopy = [...array];
    await insertionSort(arrCopy);
    setHighlightLine(null);
    setHighlightIndex(null);
    setIsSorting(false);
  };

  return (
    <div className="bg-sub-image">
      <div className="flex">
        {/* Left side - Visualizer */}
        <div className="container mt-20 w-1/2 h-1/2">
          <h2 className="text-4xl text-gray-400 hover:text-white">
            Insertion Sort Visualizer
          </h2>

          {/* Progress bar */}
          <div className="flex items-center gap-4 mt-4">
            <input
              type="range"
              min="5"
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
                className="bar"
                style={{
                  height: `${num * 3}px`,
                  backgroundColor:highlightIndex === idx ? "red" : undefined,
                  border: `black solid 1px`,
                }}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons mt-6">
            <Button
              onClick={generateArray}
              disabled={isSorting}
              buttonName={"Generate Array"}
            />
            <Button
              onClick={startSort}
              disabled={isSorting}
              buttonName={"Start Insertion Sort"}
            />
          </div>
        </div>

        {/* Right side - Code snippet */}
        <div className="flex-1 p-4 mt-20">
          <div
            className="bg-gray-900 bg-opacity-60 backdrop-blur-md text-white p-4 rounded-lg overflow-auto h-full"
            style={{ fontFamily: "monospace" }}
          >
            <pre>
              <code
                className="text-2xl"
                style={{
                  backgroundColor:
                    highlightLine === 1 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`for (let i = 1; i < arr.length; i++) {`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 2 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    let key = arr[i];`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 3 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    while (j >= 0 && arr[j] > key) {`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 4 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`        arr[j + 1] = arr[j];`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 5 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    arr[j + 1] = key;`}
              </code>
              {"\n"}
              <code>{`}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <InsertionSortInfo />

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
