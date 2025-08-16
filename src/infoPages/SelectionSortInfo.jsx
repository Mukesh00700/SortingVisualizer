import { useState } from "react";
import { FaJava, FaJs, FaCuttlefish } from "react-icons/fa";

export default function SelectionSortInfo() {
  const [language, setLanguage] = useState("cpp");

  const codes = {
    cpp: `#include <bits/stdc++.h>
using namespace std;

void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for(int i = 0; i < n-1; i++) {
        int minIdx = i;
        for(int j = i+1; j < n; j++) {
            if(arr[j] < arr[minIdx])
                minIdx = j;
        }
        swap(arr[i], arr[minIdx]);
    }
}

int main() {
    vector<int> arr = {64, 25, 12, 22, 11};
    selectionSort(arr);
    for(int x : arr) cout << x << " ";
}
`,

    java: `import java.util.*;

class SelectionSort {
    void sort(int arr[]) {
        int n = arr.length;
        for(int i = 0; i < n-1; i++) {
            int minIdx = i;
            for(int j = i+1; j < n; j++) {
                if(arr[j] < arr[minIdx])
                    minIdx = j;
            }
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String args[]) {
        int arr[] = {64, 25, 12, 22, 11};
        SelectionSort ob = new SelectionSort();
        ob.sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
`,

    js: `function selectionSort(arr) {
  let n = arr.length;
  for(let i = 0; i < n-1; i++) {
    let minIdx = i;
    for(let j = i+1; j < n; j++) {
      if(arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));`,
  };

  return (
    <div className="flex gap-4 mt-20 min-h-screen">
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
          <h2 className="text-2xl font-bold mb-4">History of Selection Sort</h2>
          <p className="mb-4">
            Selection Sort is one of the simplest and most intuitive sorting algorithms. 
            It has been widely used in teaching due to its simplicity, although it is not efficient for large datasets.
          </p>

          <h3 className="text-xl font-semibold mb-2">How Selection Sort Works</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Divides the array into a sorted and an unsorted part.</li>
            <li>Finds the minimum element from the unsorted part.</li>
            <li>Swaps it with the first unsorted element.</li>
            <li>Repeats until the whole array is sorted.</li>
          </ul>

          <p className="mt-4">
            Its time complexity is <b>O(n²)</b> in all cases, making it inefficient compared to algorithms like 
            Merge Sort and Quick Sort. However, it performs well on small datasets and is easy to implement.
          </p>
        </div>
      </div>
    </div>
  );
}
