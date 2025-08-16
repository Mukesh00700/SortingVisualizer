import { useState } from "react";
import { FaJava, FaJs, FaCuttlefish } from "react-icons/fa";

export default function QuickSortInfo() {
  const [language, setLanguage] = useState("cpp");

  const codes = {
    cpp: `#include <bits/stdc++.h>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for(int j = low; j < high; j++) {
        if(arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if(low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};
    quickSort(arr, 0, arr.size() - 1);
    for(int x : arr) cout << x << " ";
}
`,
    java: `import java.util.*;

class QuickSort {
    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for(int j = low; j < high; j++) {
            if(arr[j] <= pivot) {
                i++;
                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            }
        }
        int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
        return i + 1;
    }

    void sort(int arr[], int low, int high) {
        if(low < high) {
            int pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }

    public static void main(String args[]) {
        int arr[] = {10, 7, 8, 9, 1, 5};
        QuickSort ob = new QuickSort();
        ob.sort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}
`,
    js: `function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
  return i+1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if(low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

console.log(quickSort([10, 7, 8, 9, 1, 5]));`
  };

  return (
    <div className="flex gap-4">
      {/* Left Code Panel */}
      <div className="flex-1 p-4 w-1/2">
        <div
          className="bg-gray-900 bg-opacity-60 backdrop-blur-md text-white p-4 rounded-lg overflow-auto h-full"
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
      <div className="bg-gray-800 w-1/2 flex-1 p-6 rounded-lg text-white overflow-auto">
        <h2 className="text-2xl font-bold mb-4">History of Quick Sort</h2>
        <p className="mb-4">
          Quick Sort was developed by <a href="https://en.wikipedia.org/wiki/C._A._R._Hoare" className="text-blue-600 font-bold">C.A.R. Hoare</a> in 1960.  
          It is one of the most efficient sorting algorithms for large datasets.
        </p>
        <h3 className="text-xl font-semibold mb-2">How Quick Sort Works</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>It follows the Divide and Conquer strategy.</li>
          <li>Selects a <b>pivot</b> element from the array.</li>
          <li>Partitions the array into elements less than pivot and greater than pivot.</li>
          <li>Recursively sorts the subarrays.</li>
        </ul>
        <p className="mt-4">
          Its average time complexity is <b>O(n log n)</b> and worst-case is <b>O(n<sup>2</sup>)</b>.  
          Quick Sort is preferred for its in-place sorting and small constant factors.
        </p>
      </div>
    </div>
  );
}
