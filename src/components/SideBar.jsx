import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export function SideBar({isVisible,setShowSideBar}){

    const closeSidebar = () => setShowSideBar(false);

    return <div className={`
      fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-40 shadow-lg p-4 pt-16
      transform transition-transform duration-500 ease-in-out border-solid border-r-4 border-gray-700 rounded-md
      ${isVisible ? 'translate-x-0' : '-translate-x-full'}
    `}>

        <div className=" justify-between items-center mb-6">
        <h2>
            <Link className="flex items-center text-gray-500 text-2xl gap-2 hover:text-white transition mt-5" to="/"><FaHome/> Home</Link>
        </h2>
        <h2 className="text-2xl font-bold text-gray-500 pt-5">Algorithms</h2>
        <div className="mt-5">
            <ul className="space-y-4">
        <li onClick={closeSidebar}>
          <Link to="/merge-sort" className="flex items-center text-gray-500 text-2xl gap-2 hover:text-white transition">
            <GoDotFill  className="text-sm"/> Merge Sort
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link to="/quick-sort" className="flex items-center text-gray-500 text-2xl gap-2 hover:text-white transition">
            <GoDotFill  className="text-sm"/> Quick Sort
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link to="/insertion-sort" className="flex items-center text-gray-500 text-2xl gap-2 hover:text-white transition">
            <GoDotFill className="text-sm" /> Insertion Sort
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link to="/selection-sort" className="flex items-center text-gray-500 text-2xl gap-2 hover:text-white transition">
            <GoDotFill className="text-sm" /> Selection Sort
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link to="/bubble-sort" className="flex items-center text-gray-500 text-2xl gap-2 hover:text-white transition">
            <GoDotFill className="text-sm" /> Bubble Sort
          </Link>
        </li>
      </ul>
        </div> 
      </div>
    </div>
}