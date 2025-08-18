import { useState } from "react";
import { FaJava, FaJs, FaCuttlefish } from "react-icons/fa";

export default function BubbleSortInfo() {
  const [language, setLanguage] = useState("cpp");

  const codes = {
    cpp: `#include <bits/stdc++.h>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for(int i = 0; i < n - 1; i++) {
        for(int j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);
        }
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    bubbleSort(arr);
    for(int x : arr) cout << x << " ";
}
`,
    java: `import java.util.*;

class BubbleSort {
    void sort(int arr[]) {
        int n = arr.length;
        for(int i = 0; i < n - 1; i++) {
            for(int j = 0; j < n - i - 1; j++) {
                if(arr[j] > arr[j+1]) {
                    int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp;
                }
            }
        }
    }

    public static void main(String args[]) {
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        BubbleSort ob = new BubbleSort();
        ob.sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
`,
    js: `function bubbleSort(arr) {
  let n = arr.length;
  for(let i = 0; i < n - 1; i++) {
    for(let j = 0; j < n - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,
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
          <h2 className="text-2xl font-bold mb-4">History of Bubble Sort</h2>
          <p className="mb-4">
            Bubble Sort is one of the simplest sorting algorithms and has been known since the early days of computer science.  
            It is often taught as the first sorting algorithm because of its simplicity.
          </p>
          <h3 className="text-xl font-semibold mb-2">How Bubble Sort Works</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>It repeatedly steps through the array.</li>
            <li>Compares adjacent elements and swaps them if they are in the wrong order.</li>
            <li>Largest elements "bubble" to the end of the array in each pass.</li>
            <li>Repeats until the array is sorted.</li>
          </ul>
          <p className="mt-4">
            Time Complexity: <b>O(n<sup>2</sup>)</b> in worst and average cases, <b>O(n)</b> in the best case if already sorted.  
            Space Complexity: <b>O(1)</b>, since it sorts in-place.  
            Bubble Sort is easy to understand but inefficient for large datasets.
          </p>
        </div>
      </div>
    </div>
  );
}
