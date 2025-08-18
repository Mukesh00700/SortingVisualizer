// src/pages/Landing.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import LockStep from "../components/LockStep";

const Landing = () => {
  const [showMore, setShowMore] = useState(false);
  const [funJokeIndex, setFunJokeIndex] = useState(0);
  const navigate = useNavigate();

  const jokes = [
    "Why did the array break up with the linked list? It found someone with better indexing 😅",
    "I told my array a joke — it didn't react. Turns out it was immutable.",
    "Why did merge sort get invited to every party? Because it always knows how to split and merge!"
  ];

  function nextJoke() {
    setFunJokeIndex((i) => (i + 1) % jokes.length);
  }

  function goToMerge() {
    navigate("/merge-sort");
  }

  function handleShuffle() {
    const demo = Array.from({ length: 8 }, (_, i) => i + 1);
    for (let i = demo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [demo[i], demo[j]] = [demo[j], demo[i]];
    }
    window.dispatchEvent(new CustomEvent("visualizer-shuffle", { detail: demo }));
    console.log("Demo shuffled array:", demo);
  }

  return (
    <div className="pt-20 text-white bg-fade bg-image">
      {/* Hero / LockStep */}
      <section className="h-[75vh] flex items-center justify-center text-center">
        <LockStep />
      </section>

      {/* Intro / Interactive Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-black">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Main card */}
          <div
            className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 shadow-2xl h-full flex flex-col justify-between"
            style={{ WebkitBackdropFilter: "blur(8px)" }}
          >
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #9aa3d9 0%, #626ca1 45%, #3d4370 100%)"
                }}
              >
                What is Sorting?
              </h2>

              <p className="text-lg text-gray-100 leading-relaxed mb-4">
                Sorting arranges elements into an order (usually ascending or descending).
                Visualizers show how algorithms move elements step-by-step — which makes the
                patterns and complexities much easier to understand.
              </p>

              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Visualizing helps you connect code to behavior (swaps, compares, merges).</li>
                <li>• Some algorithms are stable — they preserve equal-item order; others are not.</li>
                <li>• The theoretical lower bound for comparison-based sorts is <strong>Ω(n log n)</strong>.</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <button
                onClick={() => setShowMore((s) => !s)}
                className="ml-auto text-sm text-gray-300 hover:text-white transition"
              >
                {showMore ? "Hide details" : "More facts & complexities →"}
              </button>
            </div>
          </div>

          {/* Right: Facts + complexities + jokes */}
          <aside
            className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl h-full flex flex-col"
            style={{ WebkitBackdropFilter: "blur(8px)" }}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">Quick Facts</h3>
              <ul className="text-gray-200 space-y-2">
                <li>• Merge Sort was described by John von Neumann in 1945.</li>
                <li>• TimSort (a hybrid stable sort) is used by Python and Java.</li>
                <li>• Heap sort builds a heap then extracts the max — it’s in-place but not stable.</li>
              </ul>

              <div className={`mt-5 p-4 rounded-lg ${showMore ? "bg-white/10" : "bg-white/5"} transition`}>
                <h4 className="text-lg font-medium text-white mb-2">Time & Space Complexities</h4>

                <div className="overflow-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="text-gray-400">
                        <th className="pb-2">Algorithm</th>
                        <th className="pb-2">Avg</th>
                        <th className="pb-2">Worst</th>
                        <th className="pb-2">Space</th>
                        <th className="pb-2">Stable?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Bubble", "O(n²)", "O(n²)", "O(1)", "No"],
                        ["Insertion", "O(n²)", "O(n²)", "O(1)", "Yes"],
                        ["Selection", "O(n²)", "O(n²)", "O(1)", "No"],
                        ["Merge", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
                        ["Quick", "O(n log n)", "O(n²)", "O(log n)", "Usually no"],
                        ["Heap", "O(n log n)", "O(n log n)", "O(1)", "No"],
                        ["TimSort", "O(n log n)", "O(n log n)", "O(n)", "Yes"]
                      ].map(([alg, avg, worst, space, stable], i) => (
                        <tr key={i} className="text-gray-200">
                          <td className="py-1">{alg}</td>
                          <td>{avg}</td>
                          <td>{worst}</td>
                          <td>{space}</td>
                          <td>{stable}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {showMore && (
                <div className="mt-4 text-gray-200 text-sm space-y-2">
                  <p>🔎 <strong>Did you know?</strong> — Comparison-based sorts cannot beat <code>Ω(n log n)</code> in general. Non-comparison sorts (radix/counting) can achieve O(n) for restricted input types.</p>
                  <p>📌 Practical tip: For small arrays, insertion sort often beats quicksort due to low constant factors.</p>
                </div>
              )}
            </div>

            {/* Footer: jokes + back to top */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-300">
                  <div className="font-medium text-white">Fun</div>
                  <div className="mt-1">{jokes[funJokeIndex]}</div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={nextJoke}
                    className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm text-white transition"
                  >
                    Another joke
                  </button>

                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="px-3 py-2 rounded-md border border-white/20 text-sm text-gray-200 hover:bg-white/10 transition"
                  >
                    Back to top
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Landing;
