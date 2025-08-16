import '../App.css'
import LockStep from "../components/LockStep";

const Landing = () => {
  return (
    <div className="pt-20 text-white bg-fade bg-image">

      <section className="h-[75vh] flex items-center justify-center text-center">
        <LockStep/>
      </section>

      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="backdrop-blur-md bg-white/10 p-10 rounded-xl shadow-xl w-screen h-screen text-center">
          <h2 className="text-4xl font-bold mb-6">What is Sorting?</h2>
          <p className="text-lg text-gray-200 leading-8">
            Sorting is the process of arranging data in a particular order.
            <br />
            Visualizing sorting algorithms helps understand how they work step-by-step.
            <br />
            It improves clarity and helps in comparing time complexities across various algorithms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;



