import { useState } from "react";
import { FaJava, FaJs, FaCuttlefish } from "react-icons/fa";

export default function MergeSortInfo() {
  const [language, setLanguage] = useState("cpp");

  const codes = {
    cpp: `#include <bits/stdc++.h>
using namespace std;

void merge(vector<int>& arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    vector<int> L(n1), R(n2);
    for(int i = 0; i < n1; i++) L[i] = arr[l+i];
    for(int j = 0; j < n2; j++) R[j] = arr[m+1+j];

    int i = 0, j = 0, k = l;
    while(i < n1 && j < n2) {
        if(L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while(i < n1) arr[k++] = L[i++];
    while(j < n2) arr[k++] = R[j++];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if(l < r) {
        int m = l + (r-l)/2;
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
        merge(arr, l, m, r);
    }
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6, 7};
    mergeSort(arr, 0, arr.size()-1);
    for(int x : arr) cout << x << " ";
}
`,
    java: `import java.util.*;

class MergeSort {
    void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1, n2 = r - m;
        int L[] = new int[n1];
        int R[] = new int[n2];
        for(int i = 0; i < n1; ++i) L[i] = arr[l+i];
        for(int j = 0; j < n2; ++j) R[j] = arr[m+1+j];

        int i=0, j=0, k=l;
        while(i < n1 && j < n2) {
            if(L[i] <= R[j]) arr[k++] = L[i++];
            else arr[k++] = R[j++];
        }
        while(i < n1) arr[k++] = L[i++];
        while(j < n2) arr[k++] = R[j++];
    }

    void sort(int arr[], int l, int r) {
        if(l < r) {
            int m = l + (r-l)/2;
            sort(arr, l, m);
            sort(arr, m+1, r);
            merge(arr, l, m, r);
        }
    }

    public static void main(String args[]) {
        int arr[] = {12, 11, 13, 5, 6, 7};
        MergeSort ob = new MergeSort();
        ob.sort(arr, 0, arr.length-1);
        System.out.println(Arrays.toString(arr));
    }
}
`,
    js: `function merge(left, right) {
  let result = [], i = 0, j = 0;
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([12, 11, 13, 5, 6, 7]));`,
  };

  return (
    <div className="flex flex-col mb-10 md:flex gap-4 mt-10 min-h-screen">
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
          <h2 className="text-2xl font-bold mb-4">History of Merge Sort</h2>
          <p className="mb-4">
            Merge Sort was invented by <a href="https://en.wikipedia.org/wiki/John_von_Neumann#Computer_science" className="text-blue-600 font-bold">John von Neumann</a> in 1945.  
            It was one of the first algorithms designed for computers.
          </p>
          <h3 className="text-xl font-semibold mb-2">How Merge Sort Works</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>It follows the Divide and Conquer approach.</li>
            <li>Splits the array into halves recursively.</li>
            <li>Sorts each half individually.</li>
            <li>Merges the sorted halves into one sorted array.</li>
          </ul>
          <p className="mt-4">
            Its time complexity is <b>O(n log n)</b> in all cases, which makes it very efficient compared to algorithms like Bubble Sort and Insertion Sort.
          </p>
        </div>
      </div>
    </div>
  );
}

