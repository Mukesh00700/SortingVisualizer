import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {Link} from 'react-router-dom'
export function Navbar({onToggleSidebar,showSideBar}){
    return <nav className="flex border-b-2 border-gray-600 rounded justify-between items-center px-6 py-4 bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 ">
      <button
        onClick={onToggleSidebar}
        className="text-3xl text-gray-500 bg-gray-900 hover:text-white transition"
      >
        {showSideBar ? <RxCross2 /> : <IoMenu />}
      </button>
      
      <Link to="/" className="text-2xl cursor-pointer font-bold text-gray-500 hover:text-white transition">
        Sorting Visualizer
      </Link>
      
    </nav>
}