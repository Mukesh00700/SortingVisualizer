import React, { useState } from "react";
import "../style.css";
import "../App.css";
import Button from "../components/Button";
import MergeSortInfo from "../infoPages/MergeSortInfo";
import { Link } from "react-router-dom";
export default function MergeSort() {
  const [array, setArray] = useState([38, 27, 43, 3, 9, 82, 10]);
  const [steps, setSteps] = useState([]); //which array index are being compared
  const [midIndex, setMidIndex] = useState(null); //to highlight mid index in red color
  const [gapIndex, setGapIndex] = useState(null); //for gap animation 
  const [highlightLine, setHighlightLine] = useState(null); // for code highlighting
  const [arraySize, setArraySize] = useState(8); // for progress bar
  const [isSorting, setIsSorting] = useState(false); // disable buttons while sorting

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

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const mergeSort = async (arr, start, end) => {
    setHighlightLine(1);
    await sleep(300);

    if (start >= end) return;

    setHighlightLine(2);
    const mid = Math.floor((start + end) / 2);
    setMidIndex(mid);
    setGapIndex(mid);
    await sleep(600);

    setHighlightLine(3);
    await mergeSort(arr, start, mid);

    setHighlightLine(4);
    await mergeSort(arr, mid + 1, end);

    setHighlightLine(5);
    await merge(arr, start, mid, end);

    setGapIndex(null);
  };

  const merge = async (arr, start, mid, end) => {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);

    let i = 0,
      j = 0,
      k = start;

    while (i < left.length && j < right.length) {
      setHighlightLine(6);
      setSteps([start + i, mid + 1 + j]);
      await sleep(400);

      if (left[i] <= right[j]) {
        setHighlightLine(7);
        arr[k] = left[i];
        i++;
      } else {
        setHighlightLine(8);
        arr[k] = right[j];
        j++;
      }
      setArray([...arr]);
      k++;
    }

    while (i < left.length) {
      setHighlightLine(9);
      arr[k++] = left[i++];
      setArray([...arr]);
      await sleep(300);
    }

    while (j < right.length) {
      setHighlightLine(10);
      arr[k++] = right[j++];
      setArray([...arr]);
      await sleep(300);
    }
  };

  const startSort = async () => {
    setIsSorting(true);
    let arrCopy = [...array];
    await mergeSort(arrCopy, 0, arrCopy.length - 1);
    setSteps([]);
    setMidIndex(null);
    setGapIndex(null);
    setHighlightLine(null);
    setIsSorting(false);
  };

  return (
    <div className="bg-sub-image">
      <div className="flex">
        {/* Left side - Visualizer */}
        <div className="container mt-20 w-1/2 h-1/2">
          <h2 className="text-4xl text-gray-400 hover:text-white">Merge Sort Visualizer</h2>

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
                {idx === midIndex && <div className="mid-label">mid</div>}
              </div>
            ))}
          </div>

          {/* Fixed buttons */}
          <div className="buttons mt-6">
            <Button onClick={generateArray} disabled={isSorting} buttonName={'Generate Array'}/>
            <Button onClick={startSort} disabled={isSorting} buttonName={'Start Merge Sort'}/>
          </div>
        </div>

        {/* Right side - Code snippet with glassy finish */}
        <div className="flex-1 p-4 mt-20">
          <div
            className="bg-gray-900 bg-opacity-60 backdrop-blur-md text-white p-4 rounded-lg overflow-auto h-full"
            style={{ fontFamily: "monospace" }}
          >
            <pre>
              <code className="text-2xl"
                style={{
                  backgroundColor:
                    highlightLine === 1 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`function mergeSort(arr, start, end) {`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 2 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    let mid = Math.floor((start + end) / 2);`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 3 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    mergeSort(arr, start, mid);`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 4 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    mergeSort(arr, mid + 1, end);`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 5 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    merge(arr, start, mid, end);`}
              </code>
              {"\n"}
              <code>{`}`}</code>
              {"\n\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 6 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`while (i < left.length && j < right.length) {`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 7 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    left smaller`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 8 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    right smaller`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 9 ? "rgba(255,255,0,0.3)" : "transparent",
                }}
              >
                {`    copy remaining left`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 10
                      ? "rgba(255,255,0,0.3)"
                      : "transparent",
                }}
              >
                {`    copy remaining right`}
              </code>
              {"\n"}
              <code
                style={{
                  backgroundColor:
                    highlightLine === 10
                      ? "rgba(255,255,0,0.3)"
                      : "transparent",
                }}
              >
                {`}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <MergeSortInfo/>
      <div className="mt-8 text-center">
        <Link to="/" className=" text-gray-500 text-2xl gap-2 hover:text-white transition">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}