import React, { useState } from "react";
import '../style.css';
import Button from "../components/Button";
import QuickSortInfo from "../infoPages/QuickSortInfo";
import { Link } from 'react-router-dom';

export default function QuickSort() {
  const [array, setArray] = useState([12, 33, 45, 56]);
  const [arraySize, setArraySize] = useState(4);
  const [isSorting, setIsSorting] = useState(false);
  const [steps, setSteps] = useState([]); // indices being compared
  const [midIndex, setMidIndex] = useState(null); // pivot index
  const [gapIndex, setGapIndex] = useState(null); // for spacing animation
  const [highlightLine, setHighlightLine] = useState(null); // code highlighting

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const generateArray = () => {
    const arr = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 50) + 10
    );
    setArray(arr);
    setSteps([]);
    setMidIndex(null);
    setGapIndex(null);
    setHighlightLine(null);
  };

  const startSort = async () => {
    setIsSorting(true);
    let arrCopy = [...array];
    await quickSort(arrCopy, 0, arrCopy.length - 1);
    setSteps([]);
    setMidIndex(null);
    setGapIndex(null);
    setHighlightLine(null);
    setIsSorting(false);
  };

  // QuickSort recursive
  const quickSort = async (arr, start, end) => {
    setHighlightLine(1);
    await sleep(300);

    if (start >= end) return;

    setHighlightLine(2);
    const pivotIndex = await partition(arr, start, end);

    setHighlightLine(3);
    await quickSort(arr, start, pivotIndex - 1);

    setHighlightLine(4);
    await quickSort(arr, pivotIndex + 1, end);

    setMidIndex(null);
  };

  // Partition function with animations
  const partition = async (arr, start, end) => {
    let pivot = arr[end];
    setMidIndex(end); // pivot highlighted
    let i = start - 1;

    for (let j = start; j < end; j++) {
      setSteps([j, end]);
      setHighlightLine(5); // comparing line
      await sleep(400);

      if (arr[j] <= pivot) {
        i++;
        setHighlightLine(6); // swapping line
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await sleep(400);
      }
    }

    // Swap pivot to correct position
    setHighlightLine(7);
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    setArray([...arr]);
    await sleep(400);

    setSteps([]);
    return i + 1;
  };

  return (
    <div className="bg-sub-image">
      <div className="flex">
        {/* Left side - Visualizer */}
        <div className="container mt-20 w-1/2 h-1/2">
          <h2 className="text-4xl text-gray-400 hover:text-white">Quick Sort Visualizer</h2>

          {/* Progress bar */}
          <div className="flex items-center gap-4 mt-4">
            <input
              type="range"
              min="1"
              max="15"
              value={arraySize}
              onChange={(e) => setArraySize(Number(e.target.value))}
              disabled={isSorting}
            />
            <span className="text-white">{arraySize}</span>
          </div>

          {/* Bar graph */}
          <div className="array mt-4" style={{ height: "250px", display: "flex", alignItems: "flex-end" }}>
            {array.map((num, idx) => (
              <div
                key={idx}
                className={`bar ${steps.includes(idx) ? "highlight" : ""}`}
                style={{
                  height: `${num * 3}px`,
                  marginRight: gapIndex === idx ? "20px" : "0px",
                  backgroundColor: idx === midIndex ? "red" : undefined,
                  border: `black solid 1px`,
                }}
              >
                {num}
                {idx === midIndex && <div className="mid-label">pivot</div>}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons mt-6">
            <Button onClick={generateArray} disabled={isSorting} buttonName="Generate Array" />
            <Button onClick={startSort} disabled={isSorting} buttonName="Start Quick Sort" />
          </div>
        </div>

        {/* Right side - Code snippet */}
        <div className="flex-1 p-4 mt-20">
          <div
            className="bg-gray-900 bg-opacity-60 backdrop-blur-md text-white p-4 rounded-lg overflow-auto h-full"
            style={{ fontFamily: "monospace" }}
          >
            <pre>
              <code style={{ backgroundColor: highlightLine === 1 ? "rgba(255,255,0,0.3)" : "transparent" }}>
                {`function quickSort(arr, start, end) {`}
              </code>
              {"\n"}
              <code style={{ backgroundColor: highlightLine === 2 ? "rgba(255,255,0,0.3)" : "transparent" }}>
                {`  const pivotIndex = partition(arr, start, end);`}
              </code>
              {"\n"}
              <code style={{ backgroundColor: highlightLine === 3 ? "rgba(255,255,0,0.3)" : "transparent" }}>
                {`  quickSort(arr, start, pivotIndex - 1);`}
              </code>
              {"\n"}
              <code style={{ backgroundColor: highlightLine === 4 ? "rgba(255,255,0,0.3)" : "transparent" }}>
                {`  quickSort(arr, pivotIndex + 1, end);`}
              </code>
              {"\n"}
              <code>{`}`}</code>
              {"\n\n"}
              <code style={{ backgroundColor: highlightLine === 5 ? "rgba(255,255,0,0.3)" : "transparent" }}>
                {`for (let j = start; j < end; j++) { // compare`}
              </code>
              {"\n"}
              <code style={{ backgroundColor: highlightLine === 6 ? "rgba(255,255,0,0.3)" : "transparent" }}>
                {`  if (arr[j] <= pivot) { swap }`}
              </code>
              {"\n"}
              <code style={{ backgroundColor: highlightLine === 7 ? "rgba(255,255,0,0.3)" : "transparent" }}>
                {`  swap pivot to correct position`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <QuickSortInfo />
      <div className="mt-8 text-center">
        <Link to="/" className=" text-gray-500 text-2xl gap-2 hover:text-white transition">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}