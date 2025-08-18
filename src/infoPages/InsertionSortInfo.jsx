import { useState } from "react";
import { FaJava, FaJs, FaCuttlefish } from "react-icons/fa";

export default function InsertionSortInfo() {
  const [language, setLanguage] = useState("cpp");

  const codes = {
    cpp: `#include <bits/stdc++.h>
using namespace std;

void insertionSort(int arr[], int n) {
    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr)/sizeof(arr[0]);
    insertionSort(arr, n);
    for(int i = 0; i < n; i++) cout << arr[i] << " ";
}`,
    java: `class InsertionSort {
    void sort(int arr[]) {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String args[]) {
        int arr[] = {12, 11, 13, 5, 6};
        InsertionSort ob = new InsertionSort();
        ob.sort(arr);
        for (int x : arr) System.out.print(x + " ");
    }
}`,
    js: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));`,
  };

  return (
    <div className="flex flex-col mb-10 md:flex gap-4 mt-20 min-h-screen">
      {/* Left Code Panel */}
      <div className="flex-1 flex flex-col p-4">
        <div
          className="bg-gray-900 bg-opacity-60 backdrop-blur-md text-white p-4 rounded-lg overflow-auto flex-1"
          style={{ fontFamily: "monospace" }}
        >
          {/* Language Tabs */}
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setLanguage("cpp")}
              className={`p-2 rounded ${language === "cpp" ? "bg-blue-700" : "bg-gray-700"}`}
            >
              <FaCuttlefish size={24} />
            </button>
            <button
              onClick={() => setLanguage("java")}
              className={`p-2 rounded ${language === "java" ? "bg-orange-600" : "bg-gray-700"}`}
            >
              <FaJava size={24} />
            </button>
            <button
              onClick={() => setLanguage("js")}
              className={`p-2 rounded ${language === "js" ? "bg-yellow-500 text-black" : "bg-gray-700"}`}
            >
              <FaJs size={24} />
            </button>
          </div>

          {/* Code Display */}
          <pre className="whitespace-pre-wrap">{codes[language]}</pre>
        </div>
      </div>

      {/* Right Info Panel */}
      <div className="flex-1 flex flex-col p-4">
        <div className="bg-gray-800 w-full rounded-lg text-white overflow-auto flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">History of Insertion Sort</h2>
          <p className="mb-4">
            Insertion Sort is one of the oldest and simplest sorting algorithms.
            It was inspired by how humans arrange playing cards in their hands:
            by picking one card at a time and placing it in its correct position
            relative to the already sorted cards.
          </p>
          <h3 className="text-xl font-semibold mb-2">How Insertion Sort Works</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Start from the second element of the array.</li>
            <li>Compare it with the previous elements and shift them if needed.</li>
            <li>Insert the current element into its correct position.</li>
            <li>Repeat until the entire array is sorted.</li>
          </ul>
          <p className="mt-4">
            Its time complexity is <b>O(n²)</b> in the average and worst case, 
            but it performs very well on nearly sorted arrays with a best case of <b>O(n)</b>.  
            It is also an <b>in-place algorithm</b> with space complexity <b>O(1)</b>.
          </p>
        </div>
      </div>
    </div>
  );
}